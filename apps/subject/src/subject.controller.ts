import { Controller, Get } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';

import { SubjectService } from './subject.service';

@Controller()
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @MessagePattern({ cmd: 'get_subjects' })
  getStudents() {
    const str = `=== Subject Data === ${Math.floor(100 * Math.random())}`;
    console.log(str);
    return str;
  }

  @Get()
  getHello(): string {
    return this.subjectService.getHello();
  }
}
