import { ConfigComponent } from './component/config/config.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './component/todo/todo.component';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './auth.guard';
import { DirectivePageComponent } from './component/directive-page/directive-page.component';

const routes: Routes = [
  {
    // 미로그인
    path: '', component: LoginComponent
  },
  {
    // canActivate로 로그인 체크
    path: '', canActivate: [AuthGuard], children: [
      {
        path: 'config', component: ConfigComponent
      },
      {
        path: 'todo', component: TodoComponent
      },
      {
        path: 'user', component: UserComponent
      },
      {
        path: 'directive', component: DirectivePageComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: '', component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
