import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  log(msg: unknown) {
    console.log(msg);
  }
  error(msg: unknown) {
    console.error(msg);
  }
  warn(msg: unknown) {
    console.warn(msg);
  }
}

@Injectable()
export class LoggerMockService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  log(msg: unknown) {
    // nada
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error(msg: unknown) {
    // nada
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  warn(msg: unknown) {
    // nada
  }
}
