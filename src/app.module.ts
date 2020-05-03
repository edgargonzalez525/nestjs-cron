import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron/cron.service';
import { HelloWorldController } from './hello-world/hello-world.controller';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [CronService],
  controllers: [HelloWorldController],
})
export class AppModule {
}
