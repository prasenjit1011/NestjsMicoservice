import { Controller, Get } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller()
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getHello() {
    return this.studentService.getHello();
  }
}
