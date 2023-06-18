import { UserService } from './../../service/user.service';
import { Component, Input } from '@angular/core';
import { UserInfo } from '../../if/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent {

  userInfo: UserInfo = {
    userId: "",
    password: "",
    authority: ""
  }

  usrList : UserInfo[] = null
  @Input() AuthMsg :string = "현재 권한이 없습니다"

  constructor(private userService :UserService) {

  }

  // users
  showUsers() :UserInfo[] {
    this.usrList = this.userService.getUsers();
    return this.usrList;
  }

  registUser() {
    console.log(this.userInfo.userId);
    console.log(this.userInfo.password);
    console.log(this.userInfo.authority);
    this.userService.addUser(this.userInfo);
  }

  onSelected(value :string) {
    console.log(value);
    this.userInfo.authority = value;
  }
}

