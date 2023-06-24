package com.app.todo.service;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface AppService<T> {
    void insertStub();
    Flux<T> selectAll();
    T insert(T todo);
    Mono<T> selectById(int id);
}
