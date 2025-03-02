import { Injectable } from '@nestjs/common';

@Injectable()
export class SubjectService {
  getHello(): string {
    return 'Hello World!';
  }
}
