package com.app.todo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.app.todo.repository.TodoRepository;
import com.app.todo.repository.TodoRepositoryStub;

@Configuration
public class BeanConfig {
    
    @Bean
    public TodoRepository todoRepository() {
        return new TodoRepositoryStub();
    }
}
