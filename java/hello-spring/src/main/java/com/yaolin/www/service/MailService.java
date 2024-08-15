package com.yaolin.www.service;

import org.springframework.stereotype.Component;

@Component
public class MailService {
	public void sendMail(User user) {
		System.out.printf("send email to %s\n", user.getName());
	}
}
