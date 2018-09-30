from user import *

u = User(2, "name","email")
tasks = [
    Task(name="name1", duration=timedelta(hours=2), deadline=datetime(year=2018, month=10, day=30), notes = "Note1"),
    Task(name="name2", duration=timedelta(hours=2), deadline=datetime(year=2018, month=10, day=30), notes = "Note1"),
    Task(name="name3", duration=timedelta(hours=1), deadline=datetime(year=2018, month=10, day=30), notes = "Note1"),
    Task(name="name4", duration=timedelta(hours=2), deadline=datetime(year=2018, month=10, day=30), notes = "Note1"),

    Task(name="name5", duration=timedelta(hours=2), deadline=datetime(year=2018, month=9, day=30), notes = "Note1"),

    Task(name="name6", duration=timedelta(hours=3), deadline=datetime(year=2018, month=10, day=30), notes = "Note1"),
    Task(name="name7", duration=timedelta(hours=3), deadline=datetime(year=2018, month=10, day=3), notes = "Note1"),
]

t5 = tasks[4]

for t in tasks:
    u.add_task(t, datetime.now())

print("==========================")
past, future = u.get_schedule()
for t in future:
    print(t)

u.edit_task(127,
            "better",
            timedelta(hours=3),
            datetime(year=2018, month=11, day=30),
            "",
            datetime(year=2018, month=9, day=29, hour=9),
            datetime.now())


print("==========================")
past, future = u.get_schedule()
for t in future:
    print(t)

#u.complete_task(124, time(hour=2))

u.delete_task(123, datetime.now()-timedelta(days=1))


print("==========================")
past, future = u.get_schedule()
for t in future:
    print(t)
