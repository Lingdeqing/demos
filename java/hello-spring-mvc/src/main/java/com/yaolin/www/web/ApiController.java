package com.yaolin.www.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.yaolin.www.entity.User;
import com.yaolin.www.service.UserService;

import jakarta.annotation.PostConstruct;
import jakarta.servlet.http.HttpSession;

// @CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    UserService userService;
    List<User> users = null;

    @PostConstruct
    public void init() {
        this.users = userService.users;
    }

    @GetMapping("/status")
    public Status getStatus() {
        return new Status();
    }

    @GetMapping("/user/{name}")
    public User getUserById(@PathVariable("name") String name) {
        System.out.println("/user/{name}");
        User user = users.stream().filter(o -> o.getName().equals(name)).findFirst().get(); // get不存在会抛异常
        return user;
    }

    @GetMapping("/user/filter")
    public User helloUser(HttpSession session) {
        System.out.println("/user/filter");
        User user = (User) session.getAttribute("filter_user");
        return user;
    }

    @PostMapping(value = "/rest", consumes = "application/json;charset=UTF-8", produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String restPost() {
        return "{\"restPost\":true}";
    }

    @GetMapping(value = "/rest", produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String restGet() {
        return "{\"restGet\":true}";
    }

    @ExceptionHandler
    public ErrorResult onError(Exception ex) {
        var err = new ErrorResult();
        err.setMsg(ex.getMessage());
        return err;
    }
}

class Status {
    private String status = "ok";

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

class ErrorResult {
    private String msg = "faile";
    private int code = 500;

    public int getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
