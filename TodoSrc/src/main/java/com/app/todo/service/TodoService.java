package com.app.todo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.todo.Entity.Todo;

@Service
public interface TodoService {
    List<Todo> selectAll();
    void insertTodo(int id);
}
