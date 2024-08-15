package com.yaolin.www;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

import javax.sql.DataSource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

public class Main {

	public static void main(String[] args) throws Exception {
		String JDBC_URL = "jdbc:mysql://localhost:3306/learnjdbc?useSSL=false";
		String JDBC_USER = "root";
		String JDBC_PASSWORD = "Yl921015";

		HikariConfig config = new HikariConfig();
		config.setJdbcUrl(JDBC_URL);
		config.setUsername(JDBC_USER);
		config.setPassword(JDBC_PASSWORD);
		config.addDataSourceProperty("connectionTimeout", 1000);
		config.addDataSourceProperty("idleTimeout", 60);
		config.addDataSourceProperty("maximumPoolSize", 10);
		DataSource ds = new HikariDataSource(config);

		// try (Connection conn = DriverManager.getConnection(JDBC_URL, JDBC_USER,
		// JDBC_PASSWORD)) {
		try (Connection conn = ds.getConnection()) {
			try (PreparedStatement stmt = conn
					.prepareStatement("SELECT id, grade, name, gender FROM students  WHERE gender=?")) {
				stmt.setObject(1, 1);
				try (ResultSet rs = stmt.executeQuery()) {
					while (rs.next()) {
						long id = rs.getLong(1);
						long grade = rs.getLong(2);
						String name = rs.getString(3);
						int gender = rs.getInt("gender");
						System.out.printf("id:%d, grade:%d, name:%s, gender:%d\n", id, grade, name, gender);
					}
				}

			}

			try (PreparedStatement stmt = conn
					.prepareStatement("INSERT INTO students (grade,name,gender,score) VALUES(?,?,?,?)",
							Statement.RETURN_GENERATED_KEYS)) {
				stmt.setObject(1, 60);
				stmt.setObject(2, "Bob");
				stmt.setObject(3, 2);
				stmt.setObject(4, 89);
				int n = stmt.executeUpdate();
				ResultSet rs = stmt.getGeneratedKeys();
				while (rs.next()) {
					System.out.println("insert " + rs.getLong(1));
				}

			}
			try (PreparedStatement stmt = conn
					.prepareStatement("UPDATE students SET name=? WHERE id=?",
							Statement.RETURN_GENERATED_KEYS)) {
				stmt.setObject(1, "Jack");
				stmt.setObject(2, 1);
				int n = stmt.executeUpdate();
				System.out.println("update " + n);

			}
			try (PreparedStatement stmt = conn
					.prepareStatement("DELETE FROM students WHERE id=?",
							Statement.RETURN_GENERATED_KEYS)) {
				stmt.setObject(1, 2);
				int n = stmt.executeUpdate();
				System.out.println("delete " + n);

			}

			try {
				conn.setAutoCommit(false);
				PreparedStatement stmt = conn
						.prepareStatement("DELETE FROM students WHERE id=?",
								Statement.RETURN_GENERATED_KEYS);
				stmt.setObject(1, 5);
				stmt.executeUpdate();

				PreparedStatement stmt2 = conn
						.prepareStatement("DELETE FROM students WHERE id=?",
								Statement.RETURN_GENERATED_KEYS);
				stmt2.setObject(1, 6);
				stmt2.executeUpdate();

				System.out.println("transaction ");
				conn.commit();
			} catch (SQLException e) {
				conn.rollback();
			} finally {

				conn.setAutoCommit(true);
			}

			batchInsertStudents(conn, List.of("大黄", "小黑", "大头"), 1, 3, 99);
		}
		System.out.print("test succ");
	}

	static void batchInsertStudents(Connection conn, List<String> names, int gender, int grade, int score)
			throws SQLException {
		try {

			conn.setAutoCommit(false);
			PreparedStatement stmt = conn
					.prepareStatement("INSERT INTO students (name,gender,grade,score) VALUES(?,?,?,?)",
							Statement.RETURN_GENERATED_KEYS);

			for (String name : names) {
				stmt.setObject(1, name);
				stmt.setObject(2, gender);
				stmt.setObject(3, grade);
				stmt.setObject(4, score);
				stmt.addBatch();
			}
			int[] n = stmt.executeBatch();
			for (int i : n) {
				System.out.println(i + " inserted."); // batch中每个SQL执行的结果数量
			}

			conn.commit();
		} catch (SQLException e) {
			conn.rollback();
		} finally {
			conn.setAutoCommit(true);
		}
	}

}
