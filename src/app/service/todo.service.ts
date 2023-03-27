import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  getTodo() {
    return this.http.get<Todo>(this.todoUrl);
  }
}
