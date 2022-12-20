import { Module } from '@nestjs/common';
import { ApiCategoriesController } from './api-categories.controller';
import { ApiCategoriesService } from './api-categories.service';

@Module({
  imports: [],
  controllers: [ApiCategoriesController],
  providers: [ApiCategoriesService],
})
export class ApiCategoriesModule {}
