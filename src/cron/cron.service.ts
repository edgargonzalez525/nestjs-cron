import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';

@Injectable()
export class CronService {

  @Cron('*/10 * * * * *')
  runEvery10Seconds() {
    console.log('Every 10 seconds');
  }

  @Cron(CronExpression.EVERY_MINUTE)
  runEveryMinute() {
    console.log('Every minute');
  }

  @Timeout(15000)
  onceAfter15Seconds() {
    console.log('Called once after 15 seconds');
  }
}
