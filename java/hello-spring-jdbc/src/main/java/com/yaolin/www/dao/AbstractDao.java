package com.yaolin.www.dao;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import jakarta.annotation.PostConstruct;

public abstract class AbstractDao<T> extends JdbcDaoSupport {

    @Autowired
    JdbcTemplate jdbcTemplate;

    private String table;
    private RowMapper<T> rowMapper;

    public AbstractDao() {
        Class<T> entityClass = getParameterizedType();
        this.table = entityClass.getSimpleName().toLowerCase() + "s";
        this.rowMapper = new BeanPropertyRowMapper<>(entityClass);
    }

    @PostConstruct
    public void init() {
        super.setJdbcTemplate(jdbcTemplate);
    }

    public T getById(long id) {
        return getJdbcTemplate().queryForObject("SELECT * FROM " + table + " WHERE id=?",
                this.rowMapper, id);
    }

    @SuppressWarnings("unchecked")
    private Class<T> getParameterizedType() {
        Type type = getClass().getGenericSuperclass();
        if (!(type instanceof ParameterizedType)) {
            throw new IllegalArgumentException("Class " + getClass().getName() + " does not have parameterized type.");
        }
        ParameterizedType pt = (ParameterizedType) type;
        Type[] types = pt.getActualTypeArguments();
        if (types.length != 1) {
            throw new IllegalArgumentException(
                    "Class " + getClass().getName() + " has more than 1 parameterized types.");
        }
        Type r = types[0];
        if (!(r instanceof Class<?>)) {
            throw new IllegalArgumentException(
                    "Class " + getClass().getName() + " does not have parameterized type of class.");
        }
        return (Class<T>) r;
    }

}
