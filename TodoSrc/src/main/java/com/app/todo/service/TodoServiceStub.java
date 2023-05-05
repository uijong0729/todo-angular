package com.app.todo.service;

import java.util.*;

import org.springframework.stereotype.Component;

import com.app.todo.Entity.Todo;
import com.app.todo.repository.TodoRepository;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class TodoServiceStub implements TodoService{
    
    TodoRepository todoRepo;

    @Override
    public List<Todo> selectAll() {
        List<Todo> todoList = new ArrayList<>();
        for(var i = 0; i < 10; ++i){
            var todo = insertTodo((int) (Math.random() * 1000) + i);
            todoList.add(todo);
        }
        return todoList;
    }

    @Override
    public Todo insertTodo(int id) {
        Todo todo = todoRepo.save(new Todo(Math.random() + "", id, "title", false));
        return todo;
    };
}
