import { Controller, Get } from '@nestjs/common';
import { StudentService } from './student.service';

const amqp = require("amqplib");


@Controller()
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getHello() {
    let message = await this.studentService.getHello();

    const connection = await amqp.connect('amqp://rabbitmq');
    const channel = await connection.createChannel();
    await channel.assertQueue('test_queue', { durable: true });

    channel.sendToQueue('test_queue', Buffer.from(message));
    console.log(`Sent: ${message}`);



    return message;
  }
}
