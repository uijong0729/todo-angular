package com.app.todo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class TodoController {

    @GetMapping("/hello/mono")
    public Mono<String> helloMono() {
        // Mono : 하나의 데이터 항목만 갖는 타입
        return Mono.just("hello mono");
    }

    @GetMapping("/hello/flux")
    public Flux<String> helloFlux() {
        // Flux : 0, 1 또는 다수의 데이터를 갖는 타입
        return Flux.just("hello flux");
    }

}