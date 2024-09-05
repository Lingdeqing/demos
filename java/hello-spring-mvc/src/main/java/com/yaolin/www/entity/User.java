package com.yaolin.www.entity;

public class User {
    private String name;
    private String email;
    private String password;

    public User() {
    }

    public User(String name, String email, String password) {

        this.name = name;
        this.email = email;
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setEmail(String name) {
        this.email = name;
    }

    public String geEmail() {
        return email;
    }

    public void setPassword(String name) {
        this.password = name;
    }

    public String getPassword() {
        return password;
    }
}
