import { Injectable } from '@nestjs/common';

@Injectable()
export class SubjectService {
  getHello() {
    let str = 'Hello World! Subject';
    console.log(str);

    return str;
  }
}
