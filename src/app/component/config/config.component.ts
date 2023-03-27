import { Config, ConfigService } from '../../service/config.service';
import { Component } from '@angular/core';
import { Todo, TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  providers: [ ConfigService, TodoService ]
})
export class ConfigComponent {

  contents: Config;
  todo: Todo;

  constructor(private configService :ConfigService, private todoService :TodoService) {

  }

  showConfig() {
    this.configService.getConfig().subscribe(results => this.contents = results)
  }

  showTodo() {
    this.todoService.getTodo().subscribe(results => this.todo = results)
  }

}
