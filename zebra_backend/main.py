from flask import Flask, request, jsonify
#from flask_cors import CORS
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
#CORS(app)

timestamp = None

class Calendar:
    def __init__(self):
        pass

class DatabaseClass:
    def __init__(self):
        self.users = dict()

    def getUser(self, key):
        if not key in self.users:
            return None
        else:
            return self.users[key]

db = DatabaseClass()


############################################################

@app.route('/')
def ep_hello():
    #return app.send_static_file('index.html')
    return 'Hello, World!'
    
@app.route('/get/', methods=['POST'])
def get_tasks():
    input = json.loads(request.data)
    user = db.getUser(input.user)
    if user:
        past, future = user.get_schedule()
        return json.dumps([ [t.getDict() for t in past], [t.getDict() for t in future]], indent=4, sort_keys=True, default=str)
    else:
        print ("WARNING: user not found")

@app.route('/add/', methods=['POST'])
def add_task():
    input = json.loads(request.data)
    user = db.getUser(input.user)
    if user:
        duration = datetime.combine(date.today(), time.fromisoformat(input.duration))  - datetime.combine(date.today(), time())
        #deadline = datetime.strptime("2007-03-04T21:08:12", "%Y-%m-%dT%H:%M:%S")
        if input.deadline:
            deadline = datetime.strptime(input.deadline, "%Y-%m-%dT%H:%M:%S")
        else:
            deadline = None
        task = Task(input.name, duration, deadline, input.notes)
        user.add_task(task, datetime.now())
    else:
        print ("WARNING: user not found")

@app.route('/edit/', methods=['POST'])
def edit_task():
    input = json.loads(request.data)
    user = db.getUser(input.user)
    if user:
        task_id = int(input.task_id)
        duration = datetime.combine(date.today(), time.fromisoformat(input.duration))  - datetime.combine(date.today(), time())
        #deadline = datetime.strptime("2007-03-04T21:08:12", "%Y-%m-%dT%H:%M:%S")
        if input.deadline:
            deadline = datetime.strptime(input.deadline, "%Y-%m-%dT%H:%M:%S")
        else:
            deadline = None
        schedule = datetime.strptime(input.deadline, "%Y-%m-%dT%H:%M:%S")
        user.edit_task(task_id, input.name, duration, deadline, input.notes, schedule, datetime.now())
    else:
        print ("WARNING: user not found")

@app.route('/delete/', methods=['POST'])
def delete_task():
    input = json.loads(request.data)
    user = db.getUser(input.user)
    if user:
        task_id = int(input.task_id)
        user.delete_task(task_id, datetime.now())
    else:
        print ("WARNING: user not found")


@app.route('/complete/', methods=['POST'])
def complete_task():
    input = json.loads(request.data)
    user = db.getUser(input.user)
    if user:
        task_id = int(input.task_id)
        time_taken = time.fromisoformat(input.time_taken)
        user.complete_task(task_id, time_taken)
    else:
        print ("WARNING: user not found")

@app.route('/uncomplete/', methods=['POST'])
def uncomplete_task():
    input = json.loads(request.data)
    user = db.getUser(input.user)
    if user:
        task_id = int(input.task_id)
        user.uncomplete_task(task_id, datetime.now())
    else:
        print ("WARNING: user not found")


@app.route('/switch/', methods=['POST'])
def switch_task():
    input = json.loads(request.data)
    user = db.getUser(input.user)
    if user:
        task_id = int(input.task_id)
        user.switch_task(task_id, datetime.now())
    else:
        print ("WARNING: user not found")

@app.route('/postpone/', methods=['POST'])
def postpone_task():
    input = json.loads(request.data)
    user = db.getUser(input.user)
    if user:
        task_id = int(input.task_id)
        user.postpone_task(task_id, datetime.now())
    else:
        print ("WARNING: user not found")

if __name__ == '__main__':
    app.run(host = "127.0.0.1", port = 8080, debug = True)


