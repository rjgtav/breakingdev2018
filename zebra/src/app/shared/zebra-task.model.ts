import {UtilService} from "./util";

export class ZebraTask {

  $ID: number;
  Complete: boolean;
  Deadline: Date;
  Duration: Date = new Date(0); // only hours and minutes
  Name: string;
  Notes: string;
  Scheduled: Date;

  static fromJSON(json: any): ZebraTask {
    let task: ZebraTask = new ZebraTask();
        task.$ID = json['id'];
        task.Deadline = json['deadline']
          ? new Date(Date.parse(json['deadline']))
          : null;
        task.Complete = json['done'];
        task.Duration = new Date(Date.parse('1970-01-01 ' + json['duration']));
        task.Name = json['name'];
        task.Notes = json['notes'];
        task.Scheduled = new Date(Date.parse(json['scheduled']));

    return task;
  }
  static toJSON(obj: ZebraTask): any {
    return {
      task_id: obj.$ID ? obj.$ID : null,
      duration: UtilService.DateToUTC(obj.Duration),
      deadline: UtilService.DateToUTC(obj.Deadline),
      name: obj.Name,
      notes: obj.Notes ? obj.Notes : '',
      schedule: UtilService.DateToUTC(obj.Scheduled)
    };
  }

  constructor() {
    this.Duration.setHours(0);
  }

  get DeadlineInMinutes(): number {
    return this.Deadline
      ? this.Deadline.getHours() * 60 + this.Deadline.getMinutes()
      : 0;
  }
  get DurationInMinutes(): number {
    return this.Duration
      ? this.Duration.getHours() * 60 + this.Duration.getMinutes()
      : 0;
  }
  get ScheduledInMinutes(): number {
    return this.Scheduled
      ? this.Scheduled.getHours() * 60 + this.Scheduled.getMinutes()
      : 0;
  }

  get IsToday(): boolean {
    return this.Scheduled != null && this.Scheduled.toDateString() == new Date().toDateString();
  }
  get IsScheduled(): boolean {
    return this.Scheduled && !this.Complete && !this.IsToday;
  }

  get IsValid(): boolean {
    return !!this.Duration && !!this.Name;
  }

  get TimeStartInMinutes(): number {
    return this.Scheduled.getHours() * 60 + this.Scheduled.getMinutes();
  }
  get TimeEndInMinutes(): number {
    return (this.DurationInMinutes + this.TimeStartInMinutes) % (24 * 60);
  }

}
