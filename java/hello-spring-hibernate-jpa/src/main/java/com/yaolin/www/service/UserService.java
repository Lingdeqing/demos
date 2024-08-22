package com.yaolin.www.service;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.yaolin.www.entity.User;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Component
@Transactional
public class UserService {
    @PersistenceContext
    EntityManager em;

    public User getUserByName(String name) {
        List<User> list = em.createQuery("from User u where u.name = ?1", User.class)
                .setParameter(1, name)
                .getResultList();
        return list.isEmpty() ? null : list.get(0);
    }

    public User getUserByEmail(String email) {
        List<User> list = em.createQuery("from User u where u.email = ?1", User.class)
                .setParameter(1, email)
                .setMaxResults(1)
                .getResultList();
        return list.isEmpty() ? null : list.get(0);
    }

    public List<User> getUsers(int pageIndex) {
        int limit = 10;
        int offset = (pageIndex - 1) * limit;

        List<User> list = em.createQuery("from User u", User.class)
                .setFirstResult(offset)
                .setMaxResults(limit)
                .getResultList();
        return list;

    }

    public User login(String email, String password) {
        List<User> list = em.createNamedQuery("login", User.class)
                .setParameter("e", email)
                .setParameter("pwd", password).getResultList();
        return list.isEmpty() ? null : list.get(0);
    }

    public void updateUser(Long id, String name) {
        User user = em.find(User.class, id);
        if (user != null) {
            user.setName(name);
            em.merge(user);
        }
    }

    public User registerUser(String name, String password, String email) {
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setPassword(password);
        em.persist(user);
        System.out.printf("registerUser, %s\n", user);
        return user;
    }

    public boolean deleteUser(Long id) {
        User user = em.find(User.class, id);
        if (user != null) {
            em.remove(user);
            return true;
        }
        return false;
    }
}
