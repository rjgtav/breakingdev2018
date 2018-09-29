from user import *

u = User(2, "name","email")
t = Task(name="name1", duration=timedelta(hours=2), deadline=None, notes = "Note1")

u.add_task(t, datetime.now())

u.edit_task(123, "name3", timedelta(hours=2), None, "", datetime(year=2018, month=10, day=30, hour=8), datetime.now())

print("==========================")
past, future = u.get_schedule()
for t in future:
    print(t)
