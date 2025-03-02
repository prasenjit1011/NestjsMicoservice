import { Injectable } from '@nestjs/common';
import { Client, ClientTCP, Transport } from '@nestjs/microservices';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable()
export class SubjectService {
  @Client({ transport: Transport.TCP, options: { host: '127.0.0.1', port: 3051 } })
  private client: ClientTCP;

  async getHello(){
    let str = 'Hello World ! Subject';
    return str;
  }
}
