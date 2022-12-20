import { Test, TestingModule } from '@nestjs/testing';
import { ApiCategoriesController } from './api-categories.controller';
import { ApiCategoriesService } from './api-categories.service';

describe('ApiCategoriesController', () => {
  let apiCategoriesController: ApiCategoriesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiCategoriesController],
      providers: [ApiCategoriesService],
    }).compile();

    apiCategoriesController = app.get<ApiCategoriesController>(ApiCategoriesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiCategoriesController.getHello()).toBe('Hello World!');
    });
  });
});
