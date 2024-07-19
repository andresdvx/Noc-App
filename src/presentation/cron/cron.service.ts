import { CronJob } from "cron";

type CronTime = string | Date;
type CronCallback = () => void;

export class CronService {
  constructor() {}

  public static createJob(
    crontTime: CronTime,
    cronCallBack: CronCallback
  ): CronJob {
    const job = new CronJob(crontTime, cronCallBack);
    job.start();
    return job;
  }
}
