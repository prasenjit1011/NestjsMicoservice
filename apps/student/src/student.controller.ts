import { Controller, Get } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { StudentService } from './student.service';

@Controller()
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @MessagePattern({ cmd: 'get_students' })
  getStudents() {
    const str = `=== Student Data === ${Math.floor(100 * Math.random())}`;
    console.log(str);
    return str;
  }

  @Get()
  getHello(){
    return this.studentService.getHello();
  }
}
