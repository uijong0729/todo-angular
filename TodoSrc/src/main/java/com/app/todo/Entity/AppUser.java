package com.app.todo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity(name = "app_user")
@AllArgsConstructor
@NoArgsConstructor
public class AppUser {

    @Id
    @Column(name = "user_id", length = 50)
    String userId;
    
    @NotBlank
    @Column(name = "user_name", length = 20)
    private String username;
    
    @NotBlank
    @Size(min = 12, max = 128)
    @Column(name = "password", length = 120)
    private String password;
    
    @NotBlank
    @Column(name = "authority", length = 20)
    @Enumerated
    private Authority authority;

    enum Authority {
        ADMIN, USER
    }
}
