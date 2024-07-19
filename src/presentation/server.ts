import { CronService } from "./cron/cron.service";
export class Server {
  constructor() {}

  public static bootstrap(): void {
    CronService.createJob("*/5 * * * * *", () => console.log("Hello World 5"));
  }
}
