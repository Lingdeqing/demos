package com.yaolin.www.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.yaolin.www.entity.User;

public interface UserMapper {
    @Select("SELECT * FROM users WHERE id = #{id}")
    User getUserById(@Param("id") long id);

    @Select("SELECT * FROM users WHERE name = #{name}")
    User getUserByName(@Param("name") String name);

    @Select("SELECT * FROM users WHERE email = #{email}")
    User getUserByEmail(@Param("email") String id);

    @Select("SELECT * FROM users LIMIT #{offset}, #{maxResults}")
    List<User> getAll(@Param("offset") int offset, @Param("maxResults") int maxResults);

    @Update("UPDATE users SET name = #{user.name} WHERE id = #{user.id}")
    void updateUser(@Param("user") User user);

    @Delete("DELETE FROM users WHERE id = #{user.id}")
    void deleteUserById(@Param("id") long id);

    @Options(useGeneratedKeys = true, keyProperty = "id", keyColumn = "id")
    @Insert("INSERT INTO users (email, password, name, createdAt) VALUES (#{user.email}, #{user.password}, #{user.name}, #{user.createdAt})")
    void insertUser(@Param("user") User user);

}
