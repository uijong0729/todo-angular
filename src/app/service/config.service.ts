import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = 'assets/config.json';
  todoUrl = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private http: HttpClient) {

  }

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }

  getTodo() {
    return this.http.get<string>(this.configUrl);
  }
}

