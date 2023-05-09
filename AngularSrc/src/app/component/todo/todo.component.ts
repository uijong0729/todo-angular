import { Component, Input } from '@angular/core';
import { Logger } from 'src/app/service/logger.service';
import { Todo, TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent {

  todo: Todo;
  todoList: Todo[];

  constructor(private todoService :TodoService, private log: Logger) {

  }

  showTodo() {
    this.todoService.getTodo("0").subscribe(results => this.todo = results)
  }

  showTodoList() {
    this.todoService.getTodoList().subscribe(results => this.todoList = results)
  }

  postTodo(title: string) {
    let result = this.todoService.postTodo(title, "user");
    result.subscribe(item => {
      this.log.info(item);
    });
  }
}
