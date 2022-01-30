import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  find(): string {
    return 'Hello World!';
  }
}
