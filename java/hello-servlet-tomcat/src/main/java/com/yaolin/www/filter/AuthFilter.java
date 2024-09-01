package com.yaolin.www.filter;

import java.io.IOException;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebFilter("/*")
public class AuthFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse resp = (HttpServletResponse) response;
        System.out.println("AuthFiler:" + req.getRequestURI());
        if (!"/sign".equals(req.getRequestURI()) && req.getSession().getAttribute("user") == null) {
            System.out.println("AuthFiler: not login!");
            resp.sendRedirect("/sign");
        } else {
            chain.doFilter(request, response);
        }
    }

}
