package com.app.todo.controller;

@RestController
public class TodoController {

    @GetMapping("/hello")
    public Mono<String> hello() {
        return Mono.just("hello");
    }

}