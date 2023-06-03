import { UserInfo } from './../if/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logger } from './logger.service';
import { SessionService } from './session.service';

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
  usersUrl = "https://jsonplaceholder.typicode.com/users/"
  addUserUrl = "http://localhost:8080/user/add"
  logoutUrl = "http://localhost:8080/user/logout"
  loginUrl = "http://localhost:8080/user/login"

  constructor(
    private http: HttpClient,
    private log: Logger,
    private session: SessionService) { }

  getUser() :Observable<User> {
    this.log.info("getUser");
    return this.http.get<User>(this.userUrl);
  }

  getUsers() :Observable<User[]> {
    this.log.info("getUsers");
    return this.http.get<User[]>(this.usersUrl);
  }

  addUser(user :UserInfo) {
    // userId, username, password, authority(ADMIN, USER)
    this.log.info("addUser")
    this.http.post<UserInfo>(this.addUserUrl, {
      userId: user.userId,
      username: "name",
      password: user.password,
      authority: user.authority
    }).subscribe(item => {
      this.log.info(item);
    });
  }

  login(id :string, pw :string) {
    this.log.info(id + "/" + pw);
  }

  logout(id :string) :void {
    this.log.info(id);
    this.http.post<UserInfo>(this.logoutUrl, {
      userId: id
    }).subscribe(item => {
      console.log(item);
      this.session.clear();
    })
  }
}
