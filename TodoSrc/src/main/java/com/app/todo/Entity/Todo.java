package com.app.todo.Entity;

public record Todo(
    String userId,
    int id,
    String title,
    boolean completed
) {
    
}
