package com.yaolin.www.service;

public class MailService {
	public void sendMail(User user) {
		System.out.printf("send email to %s\n", user.getName());
	}
}
