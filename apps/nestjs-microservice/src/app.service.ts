import { Injectable } from '@nestjs/common';
import { Client, ClientTCP, Transport } from '@nestjs/microservices';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  @Client({ transport: Transport.TCP, options: { host: 'student', port: 3051 } })
  private clientStudent: ClientTCP;
  
  @Client({ transport: Transport.TCP, options: { host: 'subject', port: 3052 } })
  private clientSubject: ClientTCP;
  

  async getHello(){
    let str = 'Hello World ! NestJS with Docker';
    console.log(str);
    let studentData = '-: studentData :-';
    let subjectData = '-: subjectData :-';
    studentData = await  lastValueFrom(this.clientStudent.send({ cmd: 'get_students' }, {}));
    console.log('-: TCP Response : ',studentData)

    subjectData = await  lastValueFrom(this.clientSubject.send({ cmd: 'get_subjects' }, {}));
    console.log('-: TCP Response : ',subjectData)

    return str+' : '+studentData+' : '+subjectData;
  }
}
