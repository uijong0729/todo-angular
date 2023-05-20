package com.app.todo.service;

import org.springframework.stereotype.Service;
import com.app.todo.Entity.AppUser;
import com.app.todo.repository.UserRepository;

import lombok.AllArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@AllArgsConstructor
public class AppUserServiceImpl implements AppUserService  {

    UserRepository repo;

    @Override
    public AppUser insert(AppUser user) {
        return repo.save(user);
    }

    @Override
    public Flux<AppUser> selectAll() {
        var result = repo.findAll();
        Flux<AppUser> list = Flux.fromIterable(result);
        return list;
    }

    @Override
    public Mono<AppUser> selectById(int id) {
        var result = repo.findById(id);
        Mono<AppUser> target = Mono.justOrEmpty(result);
        return target;
    }

}
