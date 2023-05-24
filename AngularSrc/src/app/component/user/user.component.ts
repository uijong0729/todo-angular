import { User, UserService } from './../../service/user.service';
import { Component, Input } from '@angular/core';
import { UserInfo } from '../../if/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent {

  user :User;
  users :User[];
  userInfo: UserInfo = {
    userId: "",
    password: ""
  }

  @Input() AuthMsg :string = "현재 권한이 없습니다"

  constructor(private userService :UserService) {

  }

  // users
  // https://jsonplaceholder.typicode.com/users
  showUsers() {
    this.userService.getUsers().subscribe(results => this.users = results)
  }

  // user
  // https://jsonplaceholder.typicode.com/users/1
  showUser() {
    this.userService.getUser().subscribe(results => this.user = results)
  }

  registUser() {
    console.log(this.userInfo.userId);
    console.log(this.userInfo.password);
  }
}

