package com.yaolin.www;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.yaolin.www.service.UserService;
import com.yaolin.www.service.User;

@Configuration
@ComponentScan
@EnableAspectJAutoProxy
public class Main {

	public static void main(String[] args) {
		// ApplicationContext app = new ClassPathXmlApplicationContext(
		// "application.xml");
		ApplicationContext app = new AnnotationConfigApplicationContext(Main.class);
		UserService userService = app.getBean(UserService.class);
		User user = userService.login("abc", "121");
		System.out.println(user.getName());
	}

}
