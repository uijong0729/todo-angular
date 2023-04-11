import { User, UserService } from './../../service/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent {

  user :User;
  users :User[];

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
}
