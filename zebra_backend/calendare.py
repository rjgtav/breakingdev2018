from datetime import timedelta
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
