from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import json
from flask import send_from_directory
import os
import threading
import urllib.request
from datetime import time, date, datetime, timedelta

from task import Task
from user import User

app = Flask(__name__)
CORS(app)

#from icalevents.icalevents import events
class IcalCalendar:
    def __init__(self, url):
        self.url = url
        self.refreshed = None
    
    def refresh(self, now):
        if not self.refreshed or self.refreshed + timedelta(days=1) < now:
            self.es = events(self.url)
    
    def get_busy_times(self, day):
        res = []
        for ev in self.es:
            if ev.start.day() == day:
                res.append((ev.start.time(), ev.end.time()))
        return res


    

class DatabaseClass:
    def __init__(self):
        self.users = dict()

    def addUser(self, user):
        self.users[user.id] = user

    def getUser(self, key):
        if not key in self.users:
            return None
        else:
            return self.users[key]

db = DatabaseClass()


#Dummy data:
db.addUser(User(1, "Zebra", "zebra@zebroide.zeb"))

############################################################

@app.route('/')
def ep_hello():
    #return app.send_static_file('index.html')
    return 'Hello, World!'
    
@app.route('/get/', methods=['POST'])
def get_tasks():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    if user:
        past, future = user.get_schedule()
        return json.dumps([ [t.getDict() for t in past], [t.getDict() for t in future]], indent=4, sort_keys=True, default=str)
    else:
        print ("WARNING: user not found")

@app.route('/add/', methods=['POST'])
def add_task():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    if user:
        duraton_time = datetime.strptime(input['duration'], "%Y-%m-%dT%H:%M:%S.000Z").time()
        duration = datetime.combine(date.today(), duraton_time)  - datetime.combine(date.today(), time())
        #deadline = datetime.strptime("2007-03-04T21:08:12", "%Y-%m-%dT%H:%M:%S.000Z")
        if input['deadline']:
            deadline = datetime.strptime(input['deadline'], "%Y-%m-%dT%H:%M:%S.000Z")
        else:
            deadline = None
        task = Task(input['name'], duration, deadline, input['notes'])
        user.add_task(task, datetime.now())
    else:
        print ("WARNING: user not found")

    return ''

@app.route('/edit/', methods=['POST'])
def edit_task():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    if user:
        task_id = int(input['task_id'])
        duraton_time = datetime.strptime(input['duration'], "%Y-%m-%dT%H:%M:%S.000Z").time()
        duration = datetime.combine(date.today(), duraton_time)  - datetime.combine(date.today(), time())
        #deadline = datetime.strptime("2007-03-04T21:08:12", "%Y-%m-%dT%H:%M:%S.000Z")
        if input['deadline']:
            deadline = datetime.strptime(input['deadline'], "%Y-%m-%dT%H:%M:%S.000Z")
        else:
            deadline = None
        schedule = datetime.strptime(input['schedule'], "%Y-%m-%dT%H:%M:%S.000Z")
        user.edit_task(task_id, input['name'], duration, deadline, input['notes'], schedule, datetime.now())
    else:
        print ("WARNING: user not found")

    return ''

@app.route('/delete/', methods=['POST'])
def delete_task():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    if user:
        task_id = int(input['task_id'])
        user.delete_task(task_id, datetime.now())
    else:
        print ("WARNING: user not found")


@app.route('/complete/', methods=['POST'])
def complete_task():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    if user:
        task_id = int(input['task_id'])
        time_taken = time.fromisoformat(input['time_taken'])
        user.complete_task(task_id, time_taken)
    else:
        print ("WARNING: user not found")

@app.route('/uncomplete/', methods=['POST'])
def uncomplete_task():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    if user:
        task_id = int(input['task_id'])
        user.uncomplete_task(task_id, datetime.now())
    else:
        print ("WARNING: user not found")


@app.route('/switch/', methods=['POST'])
def switch_task():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    if user:
        task_id = int(input['task_id'])
        user.switch_task(task_id, datetime.now())
    else:
        print ("WARNING: user not found")

@app.route('/postpone/', methods=['POST'])
def postpone_task():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    if user:
        task_id = int(input['task_id'])
        user.postpone_task(task_id, datetime.now())
    else:
        print ("WARNING: user not found")

if __name__ == '__main__':
    app.run(host = "127.0.0.1", port = 8080, debug = True)


