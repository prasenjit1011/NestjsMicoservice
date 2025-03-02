import { NestFactory } from '@nestjs/core';
import { SubjectModule } from './subject.module';

async function bootstrap() {
  const app = await NestFactory.create(SubjectModule);
  await app.listen(3002);
}
bootstrap();
