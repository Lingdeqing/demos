package com.yaolin.www.web;

import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

    List<User> users = List.of(
            new User("Bob", "bob@example.com", "123456"),
            new User("Alan", "alan@example.com", "123456"),
            new User("Lisa", "lisa@example.com", "123456"));

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
