from flask import Flask, request, jsonify
#from flask_cors import CORS
from datetime import datetime
import json
from flask import send_from_directory
import os
import threading
import urllib.request
from datetime import time, date, datetime, timedelta


app = Flask(__name__)
#CORS(app)

timestamp = None

############################################################

class Task:
    def __init__(self, name, duration, deadline, notes):
        #USER provided
        self.name = name #string
        self.duration = duration #timedelta
        self.deadline = deadline #datetime, Can be None
        self.notes = notes #string

        self.prefered_after = None #date, can be a day. if today, avoid puting it today
        self.user_scheduled = False

        #BACK provided
        self.done = False
        #before
        self.scheduled_timestamp = None #datetime
        self.predicted_duration = self.duration #timedelta
        #after
        self.time_spent = None #timedelta
    

    def __lt__(self, other): # self < other
        #FOR NON SCHEDULED ONLY
        if self.deadline != other.deadline:
            if not self.deadline:
                return False
            elif not other.deadline:
                return True
            else:
                return self.deadline < other.deadline

        else:
            self.duration >= other.duration

    def complete(self, time_spent = None):
        self.done = True
        self.time_spent = time_spent
    
    def edit(self, name, duration, deadline, notes, scheduled_timestamp):
        self.name = name #string
        self.duration = duration #timedelta
        self.deadline = deadline #datetime, Can be None
        self.notes = notes #string
        if scheduled_timestamp != self.scheduled_timestamp:
            self.user_scheduled = True
        self.scheduled_timestamp = scheduled_timestamp

    def schedule(self, timestamp):
        self.scheduled_timestamp = timestamp
    
    def set_prediction(self, duration):
        self.predicted_duration = duration
        
class Calendar:
    def __init__(self):
        pass

class User:
    def __init__(self, name, email):
        self.id = 0
        self.tasks = []
        self.done_tasks = []
        #Info
        self.name = name
        self.email = email
        #Settings
        self.startHour = 9
        self.stopHour = 22
        self.exclusion = [(time(hour=12), time(hour=14)), (time(hour=19, minute=30), time(hour=20, minutes=30))] #almoco/jantar. formato: (start, end)
        #
        self.task_id_seed = 123
        self.work_hours = timedelta(hours=6)

        self.setDaysSchedule()
    
    #
    # conservative: respects preferences, doesn't take out actions already scheduled for today
    # replace: schedule - normal + don't add on today
    # make it happen schedule -> backup for


    def addTaskToDaysSchedule(self, task):
        val = self.tasks_per_day.setdefault(task.scheduled.date(), [])
        val.append(task)

    def setDaysSchedule(self):
        self.tasks_per_day = dict()
        for t in self.tasks:
            self.addTaskToDaysSchedule(t)
        for t in self.done_tasks:
            self.addTaskToDaysSchedule(t)

    def dayIsFull(self, day):
        #FUODO take calendar into account
        tasks = self.tasks_per_day.setdefault(day, [])
        total_duration = timedelta()
        for d in [t.duration for t in tasks]:
            total_duration += d 

        return total_duration < self.work_hours

    def auxSplitSpaces(self, spaces, time):
        extra_spaces = []
        for s,e in spaces:
            if time > s and time < e:
                extra_spaces.append((s,time))
                extra_spaces.append((time, e))
            else:
                extra_spaces.append((s,e))
        return extra_spaces

    def auxRemoveSpaces(self, spaces, start, end):
        spaces = self.auxSplitSpaces(spaces, start)
        spaces = self.auxSplitSpaces(spaces, end)
        # cut out 
        spaces = [  (max(s_start, end), min(s_end, start))
            for (s_start, s_end) in spaces
            if s_start < start or s_end > end ]


    def getDaySpace(self, day, now):
        today = now.date()
        if day != today:
            spaces = [(self.startHour, self.stopHour)]
        else:
            spaces = [(now.time(), self.stopHour)]
        tasks = self.tasks_per_day.setdefault(day, [])
        #FUODO take calendar into account
        # Remove space for lunch/dinner
        for start, end in self.exclusion:
            spaces = self.auxRemoveSpaces(spaces, start, end)
        # Remove space for scheduled tasks
        for t in tasks:
            start = t.scheduled_timestamp
            end = t.scheduled_timestamp + t.duration
            spaces = self.auxRemoveSpaces(spaces, start, end)
        return spaces

    def auxGetFittingTask(self, start, end, add, respect_prefered):
        space_duration = end-start
        for t in add:
            if t.duration <= space_duration:
                if not respect_prefered or (not t.prefered_after or t.prefered_after > end):
                    return t
        return None

    def scheduleTask(self, task, timestamp):
        """Responsible for adding the task in a specific timestamp"""
        task.schedule(timestamp)
        self.tasks.append(task)
        self.tasks.sort(key=lambda t: t.scheduled_timestamp)
        self.addTaskToDaysSchedule(task)
    
    def unscheduleTask(self, task):
        """Used to roll back a schedule. MUST be followed a setDaysSchedule (eventually)""" #Yes, bad desing, i know
        task.scheduled_timestamp = None
        self.tasks.remove(task)

    def conservativeSchedule(self, now, add_today = True, respect_prefered=False):
        """
        adds one task, doesn't take from today, respects prefered after
        Can be used to add new task and postpone task
        """
        #FUODO Check for unfeasible tasks (too long)

        today = now.date()

        add = sorted(self.tasks_to_add)
        self.setDaysSchedule()
        
        if add_today:
            day = today
        else:
            day = today + timedelta(days=1)
        while add:
            spaces = self.getDaySpace(day, now)
            while not self.dayIsFull(day): #do while some task fits in some space
                task = None
                for (start, end) in spaces:
                    task = self.auxGetFittingTask(start, end, add, respect_prefered)
                    if task:
                        break
                if not task:
                    break
                elif not task.deadline or task.deadline > end:
                    #add this fitting task
                    self.auxRemoveSpaces(spaces, start, start+task.duration)
                    self.scheduleTask(task, start)
                    add.remove(task)
                else:
                    print("WARNING: conservative schedule didn't manage to fit in all tasks")
                    #Rollback:
                    for t in self.tasks_to_add:
                        self.unscheduleTask(t)
                    return False 
            today += timedelta(days=1)
        #Can fail. use non conservative in that case
        return True
    
    def replace(self, task):
        """
        to switch one task, keeps the rest in the day
        """
        pass
    
    def hardResetScheduling(self):
        tasks_reseted = []
        for t in self.tasks:
            t.scheduled_timestamp = None
            t.prefered_after = None
            tasks_reseted.append(t)
        self.tasks = []
        return tasks_reseted

    def softResetScheduling(self):
        tasks_reseted = []
        for t in self.tasks:
            if not t.user_scheduled:
                t.scheduled_timestamp = None
                t.prefered_after = None
                tasks_reseted.append(t)
                self.tasks.remove(t)
        return tasks_reseted
    
    def softResetFuture(self, today):
        tasks_reseted = []
        for t in self.tasks:
            if not t.user_scheduled and t.scheduled_timestamp.date() > today:
                t.scheduled_timestamp = None
                tasks_reseted.append(t)
                self.tasks.remove(t)
        return tasks_reseted


    def schedule(self, now, add_today = True, tasks_to_add = []):
        """non conservative schedule"""
        self.tasks_to_add = tasks_to_add
        if self.conservativeSchedule(now, add_today = add_today, respect_prefered=True):
            return True
        elif not add_today and self.conservativeSchedule(now, add_today=True):
            return True
        elif self.conservativeSchedule(now, add_today = add_today, respect_prefered=False):
            return
        elif not add_today and self.conservativeSchedule(now, add_today=True, respect_prefered=False):
            return True
        else:
            #Can't add the new tasks respecting constraints!
            self.softResetScheduling()
            if self.conservativeSchedule(now, add_today=True, respect_prefered=False):
                return True
            self.hardResetScheduling()
            if self.conservativeSchedule(now, add_today=True, respect_prefered=False):
                return True
            else:
                print("WARNING: cannot schedule required tasks")
                return False

    def find_task(self, task_id):
        for t in self.tasks:
            if t.id == task_id:
                return t
        return None

    def find_done(self, task_id):
        for t in self.done_tasks:
            if t.id == task_id:
                return t
        return None
    
    ######### Interface ############
    def get_schedule(self):
        return (self.done_tasks, self.tasks)
    
    def add_task(self, task, now):
        today = now.date()
        task.id = self.task_id_seed
        self.task_id_seed += 1

        tasks = self.softResetFuture(today)
        self.schedule(now, tasks_to_add=tasks+[task])

        #FUODO predict 
    
    def edit_task(self, task_id, name, duration, deadline, notes, schedule, now):
        today = now.date()
        task = self.find_done(task_id)
        if task:
            needs_reschedule = duration > task.duration or deadline < task.deadline or schedule != task.scheduled_timestamp
            
            task.edit(name, duration, deadline, notes, schedule)

            if needs_reschedule:
                tasks = self.softResetFuture(today)
                self.schedule(now, tasks_to_add=tasks)
        else:
            print("ERROR: did not find edited task")
    
    def delete_task(self, task_id, now):
        today = now.date()
        t = self.find_task(task_id)
        td = self.find_done(task_id)
    
        if t:
            self.tasks.remove(t)
            tasks = self.softResetFuture(today)
            self.schedule(now, tasks_to_add=tasks)
        elif td:
            self.done_tasks.remove(td)
        else:
            print("ERROR: Tried to delete task that doesn't exist")

    def complete_task(self, task_id, time_taken):
        t = self.find_task(task_id)
        if t:
            self.tasks.remove(t)
            self.done_tasks.append(t)
            t.complete(time_taken)
        else:
            print("ERROR: Tried to complete task that doesn't exist in task list")

    #1st stretch
    def switch_task(self, task_id):
        pass
    
    def postpone_task(self, task_id):
        pass

    def uncomplete_task(self, task_id):
        pass


class DatabaseClass:
    def __init__(self):
        self.users = dict()

db = DatabaseClass()


############################################################

@app.route('/')
def ep_hello():
    #return app.send_static_file('index.html')
    return 'Hello, World!'



if __name__ == '__main__':
    app.run(host = "127.0.0.1", port = 8080, debug = True)


