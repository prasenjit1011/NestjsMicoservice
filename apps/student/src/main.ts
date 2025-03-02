import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { StudentModule } from './student.module';

async function bootstrap() {
  const app = await NestFactory.create(StudentModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@rabbitmq:5672'], // RabbitMQ connection URL
      queue: 'students_queue', // Name of the queue
      queueOptions: { durable: false },
    },
  });
  await app.startAllMicroservices();

  await app.listen(3001);
}
bootstrap();
