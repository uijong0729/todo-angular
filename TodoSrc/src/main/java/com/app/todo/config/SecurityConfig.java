package com.app.todo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

// 레퍼런스
// https://github.com/uijong0729/Note/tree/master/Java/SpringSecurity
@Configuration
@EnableWebSecurity
public class SecurityConfig {
 
    @Bean
    protected SecurityFilterChain configure(HttpSecurity http) throws Exception {
        http.httpBasic().disable();
        return http.build();
    }
}
