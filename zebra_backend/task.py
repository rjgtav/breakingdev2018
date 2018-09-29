
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
    
    def getDict(self):
        return {
            "id": self.id,
            "name": self.name,
            "duration": self.duration,
            "deadline": self.deadline,
            "notes": self.notes,
            "done": self.done,
            "scheduled": self.scheduled_timestamp
        }
    
    def __repr__(self):
        return self.__str__()
    def __str__(self):
        return "Task"+ ("*" if self.user_scheduled else "") +str(self.id)+": " + ("V" if self.done else "O")  + " " + self.name + " " + str(self.duration) + " until " + str(self.deadline) + " ||Scheduled for: " + str(self.scheduled_timestamp)

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
    
    def uncomplete(self):
        self.done = False
        self.time_spent = None


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

