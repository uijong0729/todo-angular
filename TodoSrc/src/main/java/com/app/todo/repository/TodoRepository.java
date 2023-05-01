package com.app.todo.repository;

import org.springframework.stereotype.Repository;

import com.app.todo.Entity.Todo;

import reactor.core.publisher.Flux;

public interface TodoRepository {
    Todo getTodo(int id);
    Flux<Todo> getTodos();
}
