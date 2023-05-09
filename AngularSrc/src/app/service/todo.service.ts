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

  baseUrl = "http://localhost:8080/";

  constructor(private http: HttpClient, private log: Logger) { }

  getTodo(id :string) :Observable<Todo> {
    this.log.info("getTodo");
    return this.http.get<Todo>(`${this.baseUrl}todo/${id}`);
  }

  getTodoList() :Observable<Todo[]> {
    this.log.info("getTodoList");
    return this.http.get<Todo[]>(`${this.baseUrl}todo`);
  }

  postTodo(mTitle :string, mUserId :string) :Observable<string> {
    this.log.info("postTodo");
    const body :Todo = {
      title: mTitle,
      userId: mUserId,
      id: 0,
      completed: false
    }
    return this.http.post<string>(`${this.baseUrl}todo`, body);
  }
}
