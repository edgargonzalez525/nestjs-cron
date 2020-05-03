import { Test, TestingModule } from '@nestjs/testing';
import { HelloWorldController } from './hello-world.controller';

describe('HelloWorld Controller', () => {
  let controller: HelloWorldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloWorldController],
    }).compile();

    controller = module.get<HelloWorldController>(HelloWorldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
