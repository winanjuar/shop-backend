import { Controller, Get } from '@nestjs/common';
import { ApiCategoriesService } from './api-categories.service';

@Controller()
export class ApiCategoriesController {
  constructor(private readonly apiCategoriesService: ApiCategoriesService) {}

  @Get()
  getHello(): string {
    return this.apiCategoriesService.getHello();
  }
}
