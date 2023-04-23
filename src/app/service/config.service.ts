import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Logger } from './logger.service';

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

  constructor(private http: HttpClient, private log: Logger) {

  }

  getConfig() {
    this.log.info("getConfig");
    return this.http.get<Config>(this.configUrl);
  }

}

