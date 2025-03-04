import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
const amqp = require("amqplib");


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {


    const connection = await amqp.connect('amqp://rabbitmq');
    const channel = await connection.createChannel();
    await channel.assertQueue('test_queue', { durable: true });

    console.log("Waiting for messages...");
    channel.consume('test_queue', (msg) => {
      if (msg !== null) {
        console.log(`Received: ${msg.content.toString()}`);
        channel.ack(msg);
      }
    });


    return this.appService.getHello();
  }
}
