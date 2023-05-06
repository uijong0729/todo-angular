package com.app.todo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.todo.Entity.Todo;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public interface TodoService {
    Flux<Todo> selectAll();
    Todo insertTodo(Todo todo);
    Mono<Todo> selectTodoById(int id);
}
