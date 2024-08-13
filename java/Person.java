package com.itranswarp.learnjava;

public class Person {

	@Range(min = 1, max = 20)
	public String name;

	@Range(max = 10)
	public String city;

	@Range(min = 1, max = 100)
	public int age;

	public Person(String name, String city, int age) {
		this.name = name;
		this.city = city;
		this.age = age;
	}

	@Override
	public String toString() {
		return String.format("{Person: name=%s, city=%s, age=%d}", name, city, age);
	}
}
