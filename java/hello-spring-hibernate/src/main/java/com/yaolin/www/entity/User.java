package com.yaolin.www.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.NamedQueries;
import jakarta.persistence.NamedQuery;

@NamedQueries(@NamedQuery(name = "login", query = "SELECT u FROM User u WHERE u.name = :e AND u.password = :pwd"))
@Entity
public class User extends AbstractEntity {
    private String name;
    private String password;
    private String email;

    @Column(nullable = true, unique = true, length = 100)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(nullable = true, length = 100)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Column(nullable = true, length = 100)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return String.format("User[id=%s, name=%s, email=%s]", this.getId(), this.getName(), this.getEmail());
    }
}
