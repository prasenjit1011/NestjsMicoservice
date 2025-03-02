import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { StudentModule } from './student.module';

async function bootstrap() {
  const app = await NestFactory.create(StudentModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3051,
    },
  });
  await app.startAllMicroservices();

  await app.listen(3001);
}
bootstrap();
