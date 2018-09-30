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
from calendare import IcalCalendar

app = Flask(__name__)
CORS(app)

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
        duration_time = datetime.strptime(input['duration'], "%Y-%m-%dT%H:%M:%S.000Z").time()
        duration = datetime.combine(date.today(), duration_time)  - datetime.combine(date.today(), time())
        now = datetime.strptime(input['time'], "%Y-%m-%dT%H:%M:%S.000Z")
        #deadline = datetime.strptime("2007-03-04T21:08:12", "%Y-%m-%dT%H:%M:%S.000Z")
        if input['deadline']:
            deadline = datetime.strptime(input['deadline'], "%Y-%m-%dT%H:%M:%S.000Z")
        else:
            deadline = None
        task = Task(input['name'], duration, deadline, input['notes'])
        user.add_task(task, now)
    else:
        print ("WARNING: user not found")

    return ''

@app.route('/edit/', methods=['POST'])
def edit_task():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    if user:
        task_id = int(input['task_id'])
        duration_time = datetime.strptime(input['duration'], "%Y-%m-%dT%H:%M:%S.000Z").time()
        duration = datetime.combine(date.today(), duration_time)  - datetime.combine(date.today(), time())
        now = datetime.strptime(input['time'], "%Y-%m-%dT%H:%M:%S.000Z")
        #deadline = datetime.strptime("2007-03-04T21:08:12", "%Y-%m-%dT%H:%M:%S.000Z")
        if input['deadline']:
            deadline = datetime.strptime(input['deadline'], "%Y-%m-%dT%H:%M:%S.000Z")
        else:
            deadline = None
        schedule = datetime.strptime(input['schedule'], "%Y-%m-%dT%H:%M:%S.000Z")
        user.edit_task(task_id, input['name'], duration, deadline, input['notes'], schedule, now)
    else:
        print ("WARNING: user not found")

    return ''

@app.route('/delete/', methods=['POST'])
def delete_task():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    now = datetime.strptime(input['time'], "%Y-%m-%dT%H:%M:%S.000Z")
    if user:
        task_id = int(input['task_id'])
        user.delete_task(task_id, now)
    else:
        print ("WARNING: user not found")

    return ''


@app.route('/complete/', methods=['POST'])
def complete_task():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    if user:
        task_id = int(input['task_id'])
        time_taken = datetime.strptime(input['time_taken'], "%Y-%m-%dT%H:%M:%S.000Z")
        user.complete_task(task_id, time_taken)
    else:
        print ("WARNING: user not found")

    return ''

@app.route('/uncomplete/', methods=['POST'])
def uncomplete_task():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    now = datetime.strptime(input['time'], "%Y-%m-%dT%H:%M:%S.000Z")
    if user:
        task_id = int(input['task_id'])
        user.uncomplete_task(task_id, now)
    else:
        print ("WARNING: user not found")

    return ''


@app.route('/switch/', methods=['POST'])
def switch_task():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    now = datetime.strptime(input['time'], "%Y-%m-%dT%H:%M:%S.000Z")
    if user:
        task_id = int(input['task_id'])
        user.switch_task(task_id, now)
    else:
        print ("WARNING: user not found")

    return ''

@app.route('/postpone/', methods=['POST'])
def postpone_task():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    now = datetime.strptime(input['time'], "%Y-%m-%dT%H:%M:%S.000Z")
    if user:
        task_id = int(input['task_id'])
        user.postpone_task(task_id, now)
    else:
        print ("WARNING: user not found")

    return ''

#=====================ICAL===============================
@app.route('/cals/get/', methods=['POST'])
def get_cals():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    if user:
        calendars = user.getCalendars()
        return json.dumps([ c.url for c in calendars], indent=4, sort_keys=True, default=str)
    else:
        print ("WARNING: user not found")
        return ""

@app.route('/cals/add/', methods=['POST'])
def add_cal():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    if user:
        user.addCalendar(input['url'])
    else:
        print ("WARNING: user not found")
    return ""

@app.route('/cals/del/', methods=['POST'])
def del_cal():
    input = json.loads(request.data)
    user = db.getUser(input['user'])
    if user:
        user.delCalendar(input['url'])
    else:
        print ("WARNING: user not found")
    return ""


if __name__ == '__main__':
    app.run(host = "127.0.0.1", port = 8080, debug = True)


