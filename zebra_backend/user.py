from datetime import time, date, datetime, timedelta

from task import Task
from learning import TextLearning, HoursLearning

def timeDifference(a, b):
    dateTimeA = datetime.combine(date.today(), a)
    dateTimeB = datetime.combine(date.today(), b)
    # Get the difference between datetimes (as timedelta)
    return dateTimeA - dateTimeB

class User:
    def __init__(self, id, name, email):
        self.id = 1
        self.tasks = []
        self.done_tasks = []
        #Info
        self.name = name
        self.email = email
        #Settings
        self.startHour = time(hour=9)
        self.stopHour = time(hour=22)
        self.exclusion = [(time(hour=12), time(hour=14)), (time(hour=19, minute=30), time(hour=20, minute=30))] #almoco/jantar. formato: (start, end)
        #
        self.task_id_seed = 123
        self.work_hours = timedelta(hours=6)

        self.setDaysSchedule()
        self.text_predictor = TextLearning()
        self.hour_predictor = HoursLearning()
        self.last_hours_update = None

    def update_hours(self, today):
        if today != self.last_hours_update:
            self.work_hours = self.hour_predictor.recommend(today, self.work_hours, self.done_tasks)
            self.last_hours_update = today

    ####################### tasks_per_day ######################
    def addTaskToDaysSchedule(self, task):
        val = self.tasks_per_day.setdefault(task.scheduled_timestamp.date(), [])
        val.append(task)

    def setDaysSchedule(self):
        self.tasks_per_day = dict()
        for t in self.tasks:
            self.addTaskToDaysSchedule(t)
        for t in self.done_tasks:
            self.addTaskToDaysSchedule(t)

    def dayIsFull(self, day, respect_prefered):
        #FUODO take calendar into account
        if respect_prefered and day.weekday() >= 5: #Is weekend
            return True

        tasks = self.tasks_per_day.setdefault(day, [])
        total_duration = timedelta()
        for d in [t.duration for t in tasks]:
            total_duration += d 

        return total_duration >= self.work_hours

    ######################### spaces ########################
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
        return [ (s_start, s_end)
            for (s_start, s_end) in spaces
            if s_start < start or s_end > end ]

    def getDaySpace(self, day, now):
        today = now.date()
        if day != today:
            spaces = [(self.startHour, self.stopHour)]
        else:
            spaces = [(max(now.time(), self.startHour), max(now.time(), self.stopHour))]
        tasks = self.tasks_per_day.setdefault(day, [])
        #FUODO take calendar into account
        # Remove space for lunch/dinner
        for start, end in self.exclusion:
            spaces = self.auxRemoveSpaces(spaces, start, end)
        # Remove space for scheduled tasks
        for t in tasks:
            start = t.scheduled_timestamp.time()
            end = (t.scheduled_timestamp + t.duration).time()
            spaces = self.auxRemoveSpaces(spaces, start, end)
        return spaces

    ######################### scheduler ########################
    def auxGetFittingTask(self, start, end, day, add, respect_prefered):
        space_duration = timeDifference(end, start)
        for t in add:
            if t.predicted_duration <= space_duration:
                if not respect_prefered or (not t.prefered_after or t.prefered_after < day):
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
        if task in self.tasks:
            self.tasks.remove(task)

    def conservativeSchedule(self, now, add_today = True, respect_prefered=False):
        """
        adds one task, doesn't take from today, respects prefered after
        Can be used to add new task and postpone task
        """
        today = now.date()

        for t in self.tasks_to_add:
            if t.deadline and t.deadline < now:
                print ("ERROR: deadline before today: moving to today")
                t.deadline = now

        add = sorted(self.tasks_to_add)
        #print("Priority")
        #print(add)
        #print("Priority")
        self.setDaysSchedule()
        
        if add_today:
            day = today
        else:
            day = today + timedelta(days=1)
        while add:
            spaces = self.getDaySpace(day, now)
            while not self.dayIsFull(day, respect_prefered) and add: #do while some task fits in some space
                task = None
                for (start, end) in spaces:
                    task = self.auxGetFittingTask(start, end, day, add, respect_prefered)
                    if task:
                        break
                if not task:
                    break
                elif not task.deadline or task.deadline > datetime.combine(day, end):
                    #add this fitting task
                    print("Adding task")
                    spaces = self.auxRemoveSpaces(spaces, start, (datetime.combine(day,start)+task.predicted_duration).time() )
                    self.scheduleTask(task, datetime.combine(day,start))
                    add.remove(task)
                else:
                    print("WARNING: conservative schedule didn't manage to fit in all tasks")
                    #Rollback:
                    for t in self.tasks_to_add:
                        self.unscheduleTask(t)
                    return False 
            day += timedelta(days=1)
        #Can fail. use non conservative in that case
        return True
    
    ############################# resets ############################
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
            self.tasks_to_add += self.softResetScheduling()
            if self.conservativeSchedule(now, add_today=True, respect_prefered=False):
                return True
            self.tasks_to_add += self.hardResetScheduling()
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
        task.set_prediction(self.text_predictor.predict(task))

        self.update_hours(today)

        tasks = self.softResetFuture(today)
        self.schedule(now, tasks_to_add=tasks+[task])
    
    def edit_task(self, task_id, name, duration, deadline, notes, schedule, now):
        today = now.date()
        task = self.find_task(task_id)
        if task:
            needs_reschedule = duration > task.duration or deadline != task.deadline or schedule != task.scheduled_timestamp
            
            task.edit(name, duration, deadline, notes, schedule)

            if needs_reschedule:
                tasks = self.softResetFuture(today)
                if not task.user_scheduled:
                    self.unscheduleTask(task)
                    self.schedule(now, tasks_to_add=tasks+[task])
                else:
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
            self.text_predictor.register_task(t)
        else:
            print("ERROR: Tried to complete task that doesn't exist in task list")

    #1st stretch
    def switch_task(self, task_id, now):
        return self.postpone_task(task_id, now, switch=True)
    
    def postpone_task(self, task_id, now, switch = False):
        today = now.date()
        t = self.find_task(task_id)
        if t:
            t.prefered_after = today
            tasks = self.softResetFuture(today)
            self.unscheduleTask(t)
            self.schedule(now, tasks_to_add=tasks+[t])

            self.schedule(now, add_today = switch, tasks_to_add = [])
        else:
            print("ERROR: Tried to postpone task that doesn't exist in task list")

    def uncomplete_task(self, task_id, now):
        today = now.date()
        t = self.find_done(task_id)
        if t:
            t.uncomplete()
            self.done_tasks.remove(t)
            tasks = self.softResetFuture(today)
            self.schedule(now, tasks_to_add=tasks+[t])
        else:
            print("ERROR: Tried to uncomplete task that doesn't exist in task list")
        
    def do_today(self, task_id):
        #try to fit today
            #if ok, done
        #else
        #soft reset future
        #soft reset today
        #try to schedule today
        #normal schedule
        pass