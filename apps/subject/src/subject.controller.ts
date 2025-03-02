import { Controller, Get } from '@nestjs/common';
import { SubjectService } from './subject.service';

@Controller()
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  getHello() {
    return this.subjectService.getHello();
  }
}
