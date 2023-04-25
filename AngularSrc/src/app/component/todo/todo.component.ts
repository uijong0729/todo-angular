import { Component } from '@angular/core';
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

  constructor(private todoService :TodoService) {

  }

  showTodo() {
    this.todoService.getTodo().subscribe(results => this.todo = results)
  }

  showTodoList() {
    this.todoService.getTodoList().subscribe(results => this.todoList = results)
  }
}
