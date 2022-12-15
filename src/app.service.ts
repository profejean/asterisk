import { Injectable } from '@nestjs/common';
/*import client from 'ari-client';
npm install -D @types */
import * as ariclient from 'ari-client';
import * as utilclient from 'util';

@Injectable()
export class AppService {
  getHello(): string {
    /*this.clients.connect(
      'localhost:8088/ari/events',
      'asterisk',
      'asterisk',
      function (err, ari) {
        console.log(ari);
      },
    );*/
    ariclient
      .connect('http://localhost:8088/ari/events', 'asterisk', 'asterisk')
      .then(function (ari) {
        console.log('entre');
        console.log(ari);
      })
      .catch(function (err) {
        console.log(err);
      });
    return 'Hello World!';
  }
}
