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

  constructor(private userService :UserService) {

  }

  // users
  // https://jsonplaceholder.typicode.com/users

  // user
  // https://jsonplaceholder.typicode.com/users/1
  showUser() {
    this.userService.getUser().subscribe(results => this.user = results)
  }
}
