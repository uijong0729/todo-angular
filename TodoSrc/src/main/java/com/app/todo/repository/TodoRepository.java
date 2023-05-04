package com.app.todo.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.app.todo.Entity.Todo;

@Transactional
public interface TodoRepository extends ReactiveCrudRepository<Todo, Integer>{
    
}
