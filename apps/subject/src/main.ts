import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { SubjectModule } from './subject.module';

async function bootstrap() {
  const app = await NestFactory.create(SubjectModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3052,
    },
  });
  await app.startAllMicroservices();

  await app.listen(3002);
}
bootstrap();
