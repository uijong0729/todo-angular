import { ConfigComponent } from './component/config/config.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './component/todo/todo.component';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
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
    path: '', component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
