package com.app.todo.controller;


import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.todo.Entity.AppUser;
import com.app.todo.service.AppUserService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {

    AppUserService service;

    @GetMapping(value = "/")
    public ResponseEntity<String> getTest() {
        return ResponseEntity.ok("ok");
    }

    @PostMapping(value = "/add", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> postUser(@RequestBody AppUser todo) {
        service.insert(todo);
        return ResponseEntity.ok("ok");
    }
}