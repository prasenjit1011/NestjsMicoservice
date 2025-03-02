import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  getHello() {
    let str = 'Hello World ! Student';
    console.log(str);

    return str;
  }
}
