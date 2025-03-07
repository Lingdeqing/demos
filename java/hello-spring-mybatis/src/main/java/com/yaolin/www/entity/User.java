package com.yaolin.www.entity;

public class User extends AbstractEntity {
    private String name;
    private String password;
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String toString() {
        return String.format("User[id=%s, name=%s, email=%s, createdAt=%s]", this.getId(), this.getName(),
                this.getEmail(), this.getCreatedDateTime());
    }
}
