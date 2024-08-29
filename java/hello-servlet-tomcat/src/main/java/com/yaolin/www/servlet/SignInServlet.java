package com.yaolin.www.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/sign")
public class SignInServlet extends HttpServlet {
    private Map<String, String> users = Map.of("bob", "bob123", "alice", "alice123", "tom", "tomcat");

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html");
        PrintWriter pw = resp.getWriter();
        pw.write("<h1>Sign In!</h1>");
        pw.write("<form action=\"/sign\" method=\"post\">");
        pw.write("<p>Username: <input type=\"text\" name=\"username\"/></p>");
        pw.write("<p>Password: <input type=\"password\" name=\"password\"/></p>");
        pw.write("<p><button type=\"submit\">Sign In</button><a href=\"/\">Cancel</a></p>");
        pw.write("</form>");
        pw.flush();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        if (password != null && password.equals(this.users.get(username))) {
            req.getSession().setAttribute("user", username);
            resp.sendRedirect("/hello");
        } else {
            resp.sendError(HttpServletResponse.SC_FORBIDDEN);
        }
    }
}
