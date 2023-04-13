import { Component } from '@angular/core';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public session : SessionService) {}

  logout() {
    this.session.clear();
  }
}
