package com.yaolin.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.yaolin.www.entity.User;
import com.yaolin.www.mapper.UserMapper;

@Component
@Transactional
public class UserService {
    @Autowired
    UserMapper userMapper;

    public User getUserByName(String name) {
        User user = userMapper.getUserByName(name);
        if (user == null) {
            throw new RuntimeException("User not found by name:" + name);
        }
        return user;
    }

    public User getUserByEmail(String email) {
        User user = userMapper.getUserByEmail(email);
        if (user == null) {
            throw new RuntimeException("User not found by email:" + email);
        }
        return user;
    }

    public List<User> getUsers(int pageIndex) {
        int limit = 10;
        int offset = (pageIndex - 1) * limit;
        List<User> list = userMapper.getAll(offset, limit);
        return list;

    }

    public void updateUser(Long id, String name) {
        User user = userMapper.getUserById(id);
        if (user != null) {
            user.setName(name);
            userMapper.updateUser(user);
        }
    }

    public User registerUser(String name, String password, String email) {
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setPassword(password);
        userMapper.insertUser(user);
        System.out.printf("registerUser, %s\n", user);
        return user;
    }

    public void deleteUser(Long id) {
        userMapper.deleteUserById(id);
    }
}
