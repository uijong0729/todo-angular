import { Injectable } from '@angular/core';
import { Logger } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private log: Logger) { }

  setInfo(userId: string){
    // this.log.info("setInfo");
    localStorage.setItem('id', userId);
  }

  getInfo() : string{
    // this.log.info("getInfo");
    return localStorage.getItem('id');
  }

  clear() {
    // this.log.info("clear");
    localStorage.clear();
  }
}
