package com.yaolin.www.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class UserService {
	private List<User> userList = List.of(new User("abc", "121"),
			new User("def", "456"), new User("ghi", "789"));

	private MailService mailService;

	public void setMailService(MailService mailService) {
		this.mailService = mailService;
	}

	public User login(String username, String password) {
		List<User> users = this.userList.stream()
				.filter(u -> {
					System.out.println(u.getName());
					System.out.println(u.getName().equals(username));
					return u.getName().equals(username)
							&& u.getPassword().equals(password);
				})
				.limit(1).collect(Collectors.toList());
		if (users.size() > 0) {
			User u = users.get(0);
			this.mailService.sendMail(u);
			return u;
		}

		throw new RuntimeException("login failed");
	}
}
