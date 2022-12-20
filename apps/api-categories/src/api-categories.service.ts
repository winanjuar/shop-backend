import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiCategoriesService {
  getHello(): string {
    return 'Hello World!';
  }
}
