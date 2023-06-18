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
import lombok.extern.log4j.Log4j2;
import reactor.core.publisher.Flux;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {

    AppUserService service;

    @GetMapping(value = "/")
    public ResponseEntity<String> getTest() {
        return ResponseEntity.ok("ok");
    }

    @PostMapping(value = "/login")
    public ResponseEntity<String> login(@RequestBody AppUser user) {
        return ResponseEntity.ok(user.getUserId());
    }

    @PostMapping(value = "/logout")
    public ResponseEntity<String> logout(
        @RequestBody String userId) {
        return ResponseEntity.ok(userId);
    }

    @PostMapping(value = "/add")
    public ResponseEntity<AppUser> postUser(@RequestBody AppUser user) {
        log.info(user.toString());
        service.insert(user);
        return ResponseEntity.ok(user);
    }

    @GetMapping(value = "/list")
    public ResponseEntity<Flux<AppUser>> userList() {
        var list = service.selectAll();
        log.info(list.toString());
        return ResponseEntity.ok(list);
    }
}