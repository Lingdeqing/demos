package com.yaolin.www.filter;

import java.io.IOException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.yaolin.www.entity.User;
import com.yaolin.www.service.UserService;

import jakarta.annotation.PostConstruct;
import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;

@Component
public class AuthFilter implements Filter {
    private Logger logger = LoggerFactory.getLogger(getClass());
    @Autowired
    UserService userService;
    List<User> users = null;

    @PostConstruct
    public void init() {
        this.users = userService.users;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        try {
            HttpServletRequest req = (HttpServletRequest) request;
            authByHeader(req);
        } catch (RuntimeException e) {
            logger.error("auth user error:", e);
        }
        chain.doFilter(request, response);
    }

    private void authByHeader(HttpServletRequest req) {
        String auth = req.getHeader("Authorization");
        if (auth != null && auth.startsWith("Basic")) {
            logger.info("Authoriztion:", auth);
            String decodeName = new String(Base64.getDecoder().decode(auth.substring(6)));
            logger.info("DecodeName:", decodeName);
            String name = URLDecoder.decode(decodeName, StandardCharsets.UTF_8);
            logger.info("name:", name);
            User user = users.stream().filter(o -> o.getName().equals(name)).findFirst().orElse(null);
            if (user != null) {
                req.getSession().setAttribute("filter_user", user);
            }
        }
    }
}
