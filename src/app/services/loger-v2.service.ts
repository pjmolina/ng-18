import { Injectable } from '@angular/core';

let seq = 0;

@Injectable()
export class LoggerV2Service {
  level: number;
  constructor() {
    seq++;
    this.level = seq;
  }
  log(msg: unknown) {
    const ts = new Date().toISOString();
    console.log(`${ts} LOG ${msg} ${this.level}`);
  }
  error(msg: unknown) {
    const ts = new Date().toISOString();
    console.error(`${ts} ERR ${msg}`);
  }
  warn(msg: unknown) {
    const ts = new Date().toISOString();
    console.warn(`${ts} WARN ${msg}`);
  }
}
