import { Injectable } from '@nestjs/common';
import { Client, ClientTCP, Transport } from '@nestjs/microservices';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  @Client({ transport: Transport.TCP, options: { host: '127.0.0.1', port: 3051 } })
  private clientStudent: ClientTCP;
  
  @Client({ transport: Transport.TCP, options: { host: '127.0.0.1', port: 3052 } })
  private clientSubject: ClientTCP;
  
  async getHello(){

    let str = 'Hello World ! Nest-Service';
    const studentData = await  lastValueFrom(this.clientStudent.send({ cmd: 'get_students' }, {}));
    const subjectData = await  lastValueFrom(this.clientSubject.send({ cmd: 'get_subjects' }, {}));
    
    console.log(str)
    return str+' :: '+studentData+' :: '+subjectData;


  }
}
