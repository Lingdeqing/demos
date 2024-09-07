package com.yaolin.www.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.yaolin.www.entity.User;

@Component
public class UserService {
    public List<User> users = List.of(
            new User("Bob", "bob@example.com", "123456"),
            new User("Alan", "alan@example.com", "123456"),
            new User("Lisa", "lisa@example.com", "123456"));
}
