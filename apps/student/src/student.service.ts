import { Injectable } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Injectable()
export class StudentService {

  @MessagePattern('get_students') // Listening for messages on 'get_students' queue
  handleGetStudents(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('Received:', data);

    // Acknowledge message to prevent re-processing
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    channel.ack(originalMsg);

    return [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
  }




  getHello() {
    let str = 'Hello World ! Student Service';
    console.log(str);

    return str;
  }
}



