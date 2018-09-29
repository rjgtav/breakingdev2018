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

db = DatabaseClass()


############################################################

@app.route('/')
def ep_hello():
    #return app.send_static_file('index.html')
    return 'Hello, World!'



if __name__ == '__main__':
    app.run(host = "127.0.0.1", port = 8080, debug = True)


