import { Controller, Get } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { SubjectService } from './subject.service';

@Controller()
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @MessagePattern({ cmd: 'get_subjects' })
  getSubjects() {
    const str = `=== Subjects Data === ${Math.floor(10000 * Math.random())}`;
    console.log(str);
    return str;
  }
  
  @Get()
  getHello(){
    return this.subjectService.getHello();
  }
}
