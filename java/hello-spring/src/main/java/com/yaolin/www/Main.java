package com.yaolin.www;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.yaolin.www.service.UserService;
import com.yaolin.www.service.User;

public class Main {

	public static void main(String[] args) {
		ApplicationContext app = new ClassPathXmlApplicationContext(
				"application.xml");
		UserService userService = app.getBean(UserService.class);
		User user = userService.login("abc", "121");
		System.out.println(user.getName());
	}

}
