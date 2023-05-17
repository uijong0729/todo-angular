package com.app.todo.repository;

import java.util.Optional;
import com.app.todo.Entity.Todo;
import reactor.core.publisher.Flux;

public class TodoRepositoryStub {
    
    public Todo save(Todo entity) {
        return null;
    }

    public Optional<Todo> findById(Integer id) {
        Optional<Todo> todo = Optional.of(new Todo(id, "userid", "title", false));
        return todo;
    }

    public Flux<Todo> findAll() {
        Flux<Todo> fluxData = Flux.just(
            findById(1).get(),
            findById(2).get(),
            findById(3).get()
        );
        return fluxData;
    }
}
