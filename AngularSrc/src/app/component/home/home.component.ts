import { Component } from '@angular/core';
import { SessionService } from 'src/app/service/session.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public session :SessionService,
    public userService :UserService) {}

  logout() {
    this.userService.logout(
      this.session.getInfo()
    );
  }
}
