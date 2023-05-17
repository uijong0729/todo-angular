package com.app.todo.repository;

import org.springframework.data.repository.CrudRepository;

import com.app.todo.Entity.*;

import jakarta.transaction.Transactional;

@Transactional
public interface UserRepository extends CrudRepository<AppUser, Integer>{
    
}
