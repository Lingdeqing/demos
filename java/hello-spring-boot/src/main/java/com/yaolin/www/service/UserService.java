package com.yaolin.www.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Component;

import com.yaolin.www.entity.User;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class UserService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<User> users = List.of(
            new User("Bob", "bob@example.com", "123456"),
            new User("Alan", "alan@example.com", "123456"),
            new User("Lisa", "lisa@example.com", "123456"));

    public List<User> getUsers() {
        return this.users;
    }


    public User register(String email, String password, String name) {
        User user = new User(email, password, name);

        KeyHolder holder = new GeneratedKeyHolder();
        if (1 != jdbcTemplate.update((Connection conn) -> {
            PreparedStatement stmt = conn.prepareStatement("INSERT INTO users(name,password,email) VALUES(?,?,?)",
                    Statement.RETURN_GENERATED_KEYS);
            stmt.setObject(1, name);
            stmt.setObject(2, password);
            stmt.setObject(3, email);
            return stmt;
        }, holder)) {
            throw new RuntimeException("register user error.");
        }
        user.setId(holder.getKey().longValue());
        return user;
    }

    public List<User> getAllUsers() {
        return jdbcTemplate.query("SELECT * FROM users", new BeanPropertyRowMapper<User>(User.class));
    }
}
