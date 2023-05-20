package com.app.todo.controller;


import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.todo.Entity.Todo;
import com.app.todo.service.TodoService;

import lombok.AllArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@AllArgsConstructor
@RestController
public class TodoController {

    TodoService todoService;

    @GetMapping("/hello/mono")
    public Mono<String> helloMono() {
        // Mono : 하나의 데이터 항목만 갖는 타입
        return Mono.just("hello mono");
    }

    @GetMapping("/hello/flux")
    public Flux<String> helloFlux() {
        // Flux : 0, 1 또는 다수의 데이터를 갖는 타입
        return Flux.just("hello flux", "apple", "orange", "banana");
    }

    @GetMapping("/todo")
    public ResponseEntity<Flux<Todo>> todoList() {
        return ResponseEntity.ok(todoService.selectAll());
    }

    @PostMapping(value = "/todo", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> postTodo(@RequestBody Todo todo) {
        todoService.insert(todo);
        return ResponseEntity.ok("ok");
    }

    @GetMapping("/todo/{id}")
    public ResponseEntity<Mono<Todo>> getTodo(@PathVariable Integer id) {
        var result = todoService.selectById(id);
        return ResponseEntity.ok(result);
    }
}