import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(){
    let str = 'Hello World ! NestJS with Docker';
    console.log(str);

    return str;
  }
}
