import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setInfo(userId: string){
    localStorage.setItem('id', userId);
  }

  getInfo() : string{
    return localStorage.getItem('id');
  }

  clear() {
    localStorage.clear();
  }
}
