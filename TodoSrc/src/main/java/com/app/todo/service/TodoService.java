package com.app.todo.service;

import com.app.todo.Entity.Todo;

import reactor.core.publisher.Flux;

public interface TodoService {
    
    Flux<Todo> getRawTodos();
}
