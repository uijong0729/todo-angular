package com.app.todo.service;

import org.springframework.stereotype.Component;

import com.app.todo.Entity.Todo;
import com.app.todo.repository.TodoRepository;

import lombok.AllArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

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
    public Todo insert(Todo todo) {
        Todo result = todoRepo.save(todo);
        return result;
    };

    @Override
    public Mono<Todo> selectById(int id) {
        Mono<Todo> todos = Mono.justOrEmpty(todoRepo.findById(id));
        return todos;
    }
}
