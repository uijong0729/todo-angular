import { UserInfo } from './../if/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Logger } from './logger.service';
import { SessionService } from './session.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

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
}
