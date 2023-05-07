package com.app.todo.service;

import java.util.*;

import org.springframework.stereotype.Component;

import com.app.todo.Entity.Todo;
import com.app.todo.repository.TodoRepository;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Slf4j
@Component
@AllArgsConstructor
public class TodoServiceImpl implements TodoService{
    
    TodoRepository todoRepo;

    @Override
    public Flux<Todo> selectAll() {
        var result = todoRepo.findAll();
        Flux<Todo> list = Flux.fromIterable(result);
        return list;
    }

    @Override
    public Todo insertTodo(Todo todo) {
        Todo result = todoRepo.save(todo);
        return result;
    };

    @Override
    public Mono<Todo> selectTodoById(int id) {
        Mono<Todo> todos = Mono.justOrEmpty(todoRepo.findById(id));
        return todos;
    }
}
