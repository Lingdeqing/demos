package com.yaolin.www.service;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.yaolin.www.entity.User;

@Component
@Transactional
public class UserService {
    @Autowired
    SessionFactory sessionFactory;

    public User getUserByName(String name) {
        List<User> list = sessionFactory.getCurrentSession().createQuery("from User u where u.name = ?1", User.class)
                .setParameter(1, name)
                .list();
        return list.isEmpty() ? null : list.get(0);
    }

    public User getUserByEmail(String email) {
        List<User> list = sessionFactory.getCurrentSession().createQuery("from User u where u.email = ?1", User.class)
                .setParameter(1, email)
                .setMaxResults(1)
                .list();
        return list.isEmpty() ? null : list.get(0);
    }

    public List<User> getUsers(int pageIndex) {
        int limit = 10;
        int offset = (pageIndex - 1) * limit;

        List<User> list = sessionFactory.getCurrentSession().createQuery("from User u", User.class)
                .setFirstResult(offset)
                .setMaxResults(limit)
                .list();
        return list;

    }

    public User login(String email, String password) {
        List<User> list = sessionFactory.getCurrentSession().createNamedQuery("login", User.class)
                .setParameter("e", email)
                .setParameter("pwd", password).list();
        return list.isEmpty() ? null : list.get(0);
    }

    public void updateUser(Long id, String name) {
        User user = sessionFactory.getCurrentSession().byId(User.class).load(id);
        if (user != null) {
            user.setName(name);
            sessionFactory.getCurrentSession().merge(user);
        }
    }

    public User registerUser(String name, String password, String email) {
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setPassword(password);
        sessionFactory.getCurrentSession().persist(user);
        System.out.printf("registerUser, %s\n", user);
        return user;
    }

    public boolean deleteUser(Long id) {
        User user = sessionFactory.getCurrentSession().byId(User.class).load(id);
        if (user != null) {
            sessionFactory.getCurrentSession().remove(user);
            return true;
        }
        return false;
    }
}
