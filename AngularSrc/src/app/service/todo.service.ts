import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Logger } from './logger.service';

export interface Todo {
  userId: string,
  id: number,
  title: string,
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  todoListUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient, private log: Logger) { }

  getTodo() :Observable<Todo> {
    this.log.info("getTodo");
    return this.http.get<Todo>(this.todoUrl);
  }

  getTodoList() :Observable<Todo[]> {
    this.log.info("getTodoList");
    return this.http.get<Todo[]>(this.todoListUrl);
  }

  putTodo(mTitle :string, mUserId :string) :Observable<string> {
    this.log.info("putTodo");
    const body :Todo = {
      title: mTitle,
      userId: mUserId,
      id: 0,
      completed: false
    }
    return this.http.post<string>("http://localhost:8080/todo", body);
  }
}
