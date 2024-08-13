package com.yaolin.www.service;

public class User {
	private String name;
	private String password;

	User(String name, String password) {
		this.name = name;
		this.password = password;
	}
	public String getName() {
		return this.name;
	}
	public String getPassword() {
		return this.password;
	}
}
