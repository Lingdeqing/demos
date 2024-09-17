package com.yaolin.www.service;

import java.util.List;

import com.yaolin.www.entity.User;


public interface UserService {

    public List<User> getUsers();

    public User register(String email, String password, String name);

    public List<User> getAllUsers();
}
