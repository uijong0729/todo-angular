import { UserService } from './../../service/user.service';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

// 참고 소스
// https://blog.naver.com/PostView.nhn?blogId=hello_ico&logNo=222213453554
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    id: '',
    pw: ''
  })

  constructor(
    public session : SessionService,
    private formBuilder: FormBuilder,
    private userService: UserService
    ) {

  }

  login() {
    console.log(this.loginForm.value)
    this.userService.login(
      this.loginForm.value.id,
      this.loginForm.value.pw
    );
  }

  logout() {
    console.log(
      this.session.getInfo()
    );

    const id :string = this.session.getInfo();
    this.userService.logout(id);
  }
}
