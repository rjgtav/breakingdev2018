from datetime import time, date, datetime, timedelta
from math import sqrt
from task import Task

class TextLearning:
    def __init__(self):
        self.recorded = dict() #value: (count, sum, sum squared)
        self.total_words = 0
    
    def register_task(self, task):
        """register complete task"""
        words = set(task.name.split())
        ratio = task.time_spent.seconds /task.duration.seconds

        for word in words:
            self.register_word(word, ratio)

    def register_word(self, word, ratio):
        self.total_words += 1
        (count, sum, sumsqrd) = self.recorded.setdefault(word, (0, 0.0, 0.0))
        self.recorded[word] = (count+1, sum+ratio, sumsqrd+(ratio*ratio))


    def vector_from_word(self, word):
        (count, sum, sumsqrd) = self.recorded.setdefault(word, (0, 0.0, 0.0))
        if count != 0:
            avg = sum / count
            stdev = sqrt(sumsqrd/count - (avg*avg))
        else:
            avg = 0.0
            stdev = 0.0
        
        return (count, avg, stdev)

    def predict(self, task):
        """predicts time spent on a new task"""
        words = set(task.name.split())
        duration = task.duration
        return self.predict_aux(words, duration)

    def predict_aux(self, words, duration):
        vectors = [self.vector_from_word(word) for word in words]

        relevant_vectors = [ (c,s,ss) for (c,s,ss) in vectors if c > 5 ]

        if not relevant_vectors:
            return duration
        
        total_count = 0
        prediction = 0.0
        for count, avg, stdev in relevant_vectors:
            total_count += count/(1+stdev)
            prediction += avg * count /(1+stdev)
        predicted_ratio = prediction / total_count

        return duration * predicted_ratio

        

class HoursLearning:
    def gather(self, done_tasks, today):
        self.tasks_per_day = dict()
        for t in done_tasks:
            val = self.tasks_per_day.setdefault(t.scheduled_timestamp.date(), [])
            val.append(t)
        #if today in self.tasks_per_day:
        self.tasks_per_day.pop(today, None)

    def summarize(self):
        """Returns the ideal time to work per day
        Exploration is assumed to work naturally"""
        ideal_time = timedelta()
        total_tasks = 0

        for d in self.tasks_per_day:
            time_spent = timedelta()
            for t in self.tasks_per_day[d]:
                time_spent += t.time_spent
            n_tasks = len(self.tasks_per_day[d])

            ideal_time += time_spent * n_tasks
            total_tasks += n_tasks
        
        return (ideal_time, total_tasks)

    def recommend(self, today, current, done_tasks):
        self.gather(done_tasks, today)
        ideal_duration, sample_size = self.summarize()
        if sample_size == 0:
            return current
        
        ideal_duration = ideal_duration/sample_size
        in_noise_area = (current - ideal_duration) < timedelta(hours=1) and (current - ideal_duration) > timedelta()

        if in_noise_area:
            return current
        else:
            return current * 0.80 + ideal_duration * 0.20

            
        


        

