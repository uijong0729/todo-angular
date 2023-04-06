import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: number,
      lng: number
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = "https://jsonplaceholder.typicode.com/users/1"

  constructor(private http: HttpClient) { }

  getUser() :Observable<User> {
    return this.http.get<User>(this.userUrl);
  }
}
