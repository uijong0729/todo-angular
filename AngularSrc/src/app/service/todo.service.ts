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
}
