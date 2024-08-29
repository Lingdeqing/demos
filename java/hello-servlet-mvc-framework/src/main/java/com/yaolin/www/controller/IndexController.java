package com.yaolin.www.controller;

import jakarta.servlet.http.HttpSession;

import com.yaolin.www.bean.User;
import com.yaolin.www.framework.GetMapping;
import com.yaolin.www.framework.ModelAndView;

public class IndexController {

    @GetMapping("/")
    public ModelAndView index(HttpSession session) {
        User user = (User) session.getAttribute("user");
        return new ModelAndView("/index.html", "user", user);
    }

    @GetMapping("/hello")
    public ModelAndView hello(String name) {
        if (name == null) {
            name = "World";
        }
        return new ModelAndView("/hello.html", "name", name);
    }
}
