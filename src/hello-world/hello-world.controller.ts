import { Controller, Get } from '@nestjs/common';

@Controller('')
export class HelloWorldController {
  @Get()
  index() {
    return 'Hellow world';
  }
}
