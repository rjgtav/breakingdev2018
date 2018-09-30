from datetime import timedelta
from icalevents.icalevents import events
class IcalCalendar:
    def __init__(self, url):
        self.url = url
        self.refreshed = None
        self.spaces = []
    
    def refresh(self, day):
        if not self.refreshed or self.refreshed + timedelta(days=1) < day:
            try:
                es = events(self.url)
                self.spaces = [(ev.start, ev.end) for ev in es]
            except Exception as e:
                print("ERROR while refreshing iCal")
                print(e)

    
    def get_busy_times(self, day):
        self.refresh(day)
        res = []
        for s,e in self.spaces:
            if s.day() == day:
                res.append((s.time(), e.time()))
        return res
