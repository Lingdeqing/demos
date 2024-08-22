package com.yaolin.www.dao;

import java.sql.ResultSet;

import org.springframework.stereotype.Component;

import com.yaolin.www.service.User;

@Component
public class UserDao extends AbstractDao<User> {

    public User getUserByEmail(String email) {
        return getJdbcTemplate().queryForObject("SELECT * FROM users WHERE email=?", (ResultSet rs, int rowNum) -> {
            return new User(rs.getLong("id"), rs.getString("name"), rs.getString("password"),
                    rs.getString("email"));
        }, email);
    }

}
