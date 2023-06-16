import { UserInfo } from './../if/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Logger } from './logger.service';
import { SessionService } from './session.service';
import { Router } from '@angular/router';

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
export class UserService implements OnInit {

  userUrl = "https://jsonplaceholder.typicode.com/users/1"
  usersUrl = "http://localhost:8080/user/list"
  addUserUrl = "http://localhost:8080/user/add"
  logoutUrl = "http://localhost:8080/user/logout"
  loginUrl = "http://localhost:8080/user/login"

  constructor(
    private rout: Router,
    private http: HttpClient,
    private log: Logger,
    private session: SessionService) { }

  getUser() :Observable<User> {
    this.log.info("getUser");
    return this.http.get<User>(this.userUrl);
  }

  getUsers() :UserInfo[] {
    this.log.info("getUsers");
    let userList :UserInfo[] = null;
    this.http.get<UserInfo[]>(this.userUrl)
    .subscribe(users => {
      userList = users;
    })
    return userList;
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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    const body: UserInfo = {
      userId: id,
      password: pw,
      authority: "USER"
    }
    this.http
      .post<UserInfo>(this.loginUrl, body, httpOptions)
      .subscribe(item => {
        this.log.info(`login result ${item.userId}`)
        this.session.setInfo(item.userId);
        this.rout.navigateByUrl('todo');
      })
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

  // 초기화
  ngOnInit() {
    this.getUsers();
  }
}
