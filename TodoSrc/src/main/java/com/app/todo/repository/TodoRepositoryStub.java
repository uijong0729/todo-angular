package com.app.todo.repository;

import org.springframework.stereotype.Repository;

import com.app.todo.Entity.Todo;

import reactor.core.publisher.Flux;

public class TodoRepositoryStub implements TodoRepository{
    
    @Override
    public Todo getTodo(int id) {
        return new Todo(Math.random() + "", id, "title", false);
    }

    @Override
    public Flux<Todo> getTodos() {
        Flux<Todo> fluxData = Flux.just(
            getTodo(1),
            getTodo(2),
            getTodo(3)
        );
        return fluxData;
    }
}
