package com.yaolin.www.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import com.yaolin.www.dao.UserDao;

@Component
public class UserService {
    @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    PlatformTransactionManager txManager;

    @Autowired
    UserDao userDao;

    public User getUserById(long id) {
        // return jdbcTemplate.execute((Connection conn) -> {
        // try (PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users
        // WHERE id=?")) {
        // stmt.setObject(1, id);
        // try (ResultSet rs = stmt.executeQuery()) {
        // if (rs.next()) {
        // return new User(rs.getLong("id"), rs.getString("name"),
        // rs.getString("password"),
        // rs.getString("email"));
        // }
        // throw new RuntimeException("user not found by id.");
        // }
        // }
        // });
        return userDao.getById(id);
    }

    public User getUserByName(String name) {
        return jdbcTemplate.execute("SELECT * FROM users WHERE name=?", (PreparedStatement stmt) -> {
            stmt.setObject(1, name);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    return new User(rs.getLong("id"), rs.getString("name"), rs.getString("password"),
                            rs.getString("email"));
                }
                throw new RuntimeException("user not found by name.");
            }
        });
    }

    public User getUserByEmail(String email) {
        return jdbcTemplate.queryForObject("SELECT * FROM users WHERE email=?", (ResultSet rs, int rowNum) -> {
            return new User(rs.getLong("id"), rs.getString("name"), rs.getString("password"),
                    rs.getString("email"));
        }, email);
    }

    public User getUserByEmailDao(String email) {
        return userDao.getUserByEmail(email);
    }

    public List<User> getUsers(int pageIndex) {
        int limit = 10;
        int offset = (pageIndex - 1) * limit;
        return jdbcTemplate.query("SELECT * FROM users LIMIT ? OFFSET ?",
                new BeanPropertyRowMapper<>(User.class),
                limit, offset);

    }

    public long countUser() {
        return jdbcTemplate.queryForObject("SELECT COUNT(*) FROM users", (ResultSet rs, int rowNum) -> {
            return rs.getLong(1);
        });
    }

    public void updateUser(User user) {
        if (1 != jdbcTemplate.update("UPDATE users SET name=? WHERE id=?", user.getName(), user.getId())) {
            throw new RuntimeException("update user not found.");
        }
    }

    public void updateUsers(List<User> users) {
        TransactionStatus tx = null;
        try {
            tx = txManager.getTransaction(new DefaultTransactionDefinition());
            for (User user : users) {
                jdbcTemplate.update("UPDATE users SET name=? WHERE id=?", user.getName(), user.getId());
            }
            txManager.commit(tx);
        } catch (RuntimeException e) {
            txManager.rollback(tx);
            throw e;
        }
    }

    @Transactional
    public void updateUserNames(List<User> users, String postfix) {
        for (User user : users) {
            jdbcTemplate.update("UPDATE users SET name=? WHERE id=?", user.getName() + postfix, user.getId());
        }
    }

    public User registerUser(String name, String password, String email) {
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
        return new User(holder.getKey().longValue(), email, password, name);
    }
}
