package com.yaolin.www.web;

import com.yaolin.www.service.UserService;
import jakarta.annotation.PostConstruct;
import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.yaolin.www.entity.User;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class IndexController {

    @Autowired
    UserService userService;
    List<User> users = null;

    @PostConstruct
    public void init() {
//        this.users = userService.users; // Transactional使用了AOP，代理模式只代理了methods
        this.users = userService.getUsers();
    }

    @GetMapping("/hello")
    public ModelAndView hello(@RequestParam(value = "name", required = false) String name) {
        Map<String, Object> model = new HashMap<>();
        if (name == null) {
            name = "no one";
        }
        model.put("name", name);
        return new ModelAndView("hello.html", model);
    }

    @GetMapping("/")
    public ModelAndView index(HttpSession session, @RequestParam(value = "name", required = false) String name) {
        Map<String, Object> model = new HashMap<>();
        User user = (User) session.getAttribute("user");
        if (user != null) {
            model.put("user", user);
        }
        return new ModelAndView("index.html", model);
    }

    @GetMapping("/sign")
    public ModelAndView sign() {
        return new ModelAndView("/sign.html");
    }

    @PostMapping("/signIn")
    public ModelAndView signIn(HttpSession session, @RequestParam("email") String email,
                               @RequestParam("password") String password) {
        User user = users.stream()
                .filter((item) -> item.geEmail().equals(email) && item.getPassword().equals(password))
                .findFirst()
                .orElse(null);
        if (user != null) {
            session.setAttribute("user", user);
        }
        return new ModelAndView("redirect:/");
    }

    @GetMapping("/signOut")
    public ModelAndView signOut(HttpSession session) {
        session.removeAttribute("user");
        return new ModelAndView("redirect:/");
    }

}
