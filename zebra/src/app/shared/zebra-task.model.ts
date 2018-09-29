export class ZebraTask {

  $ID: number;
  Complete: boolean;
  Deadline: Date;
  Duration: Date = new Date(0); // only hours and minutes
  Name: string;
  Notes: string;
  Scheduled: Date;

  static fromJSON(json: any): ZebraTask {
    return null; // TODO: implement
  }
  static toJSON(obj: ZebraTask): any {
    return null; // TODO: implement
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

  get TimeStartInMinutes(): number {
    return this.Scheduled.getHours() * 60 + this.Scheduled.getMinutes();
  }
  get TimeEndInMinutes(): number {
    return (this.DurationInMinutes + this.TimeStartInMinutes) % (24 * 60);
  }

}
