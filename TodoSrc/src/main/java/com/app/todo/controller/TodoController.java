package com.app.todo.controller;

import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.app.todo.Entity.Todo;
import com.app.todo.repository.TodoRepository;

import lombok.AllArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@AllArgsConstructor
@RestController
public class TodoController {

    TodoRepository todoRepo;

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

    @GetMapping("/todo/flux")
    public Flux<Todo> todoFlux() {
        // Flux : 0, 1 또는 다수의 데이터를 갖는 타입
        return todoRepo.findAll();
    }

    @GetMapping("/todo/save/{id}")
    public String saveTodo(@PathVariable Integer id) {
        todoRepo.save(new Todo(Math.random() + "", id, "title", false));
        return "saved";
    }
}