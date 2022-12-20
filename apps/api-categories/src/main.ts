import { NestFactory } from '@nestjs/core';
import { ApiCategoriesModule } from './api-categories.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiCategoriesModule);
  await app.listen(3000);
}
bootstrap();
