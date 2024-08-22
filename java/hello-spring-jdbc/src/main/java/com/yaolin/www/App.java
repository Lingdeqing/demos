package com.yaolin.www;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.PropertySource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.yaolin.www.service.User;
import com.yaolin.www.service.UserService;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Configuration
@ComponentScan
@PropertySource("db.properties")
@EnableTransactionManagement
@EnableAspectJAutoProxy
public class App {
    @Value("${jdbc.url}")
    String jdbcUrl;
    @Value("${jdbc.username}")
    String jdbcUsername;
    @Value("${jdbc.password}")
    String jdbcPassword;

    @Bean
    DataSource createDataSource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(jdbcUrl);
        config.setUsername(jdbcUsername);
        config.setPassword(jdbcPassword);
        config.addDataSourceProperty("autoCommit", "true");
        config.addDataSourceProperty("connectionTimeout", "5");
        config.addDataSourceProperty("idleTimeout", "60");
        return new HikariDataSource(config);
    }

    @Bean
    JdbcTemplate createJdbcTemplate(@Autowired DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }

    @Bean
    PlatformTransactionManager createTxManager(@Autowired DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }

    public static void main(String[] argv) {
        System.out.println("lg");
        ApplicationContext app = new AnnotationConfigApplicationContext(App.class);

        UserService userService = app.getBean(UserService.class);
        // userService.registerUser("Bob", "password1", "bob1@example.com");
        // userService.registerUser("Alice", "password2", "alice@example.com");

        User bob = userService.getUserByEmail("bob@example.com");
        System.out.println(bob);
        // List<User> users = userService.getUsers(1);
        // System.out.println(users);

        // for (User user : users) {
        // user.setName(user.getName() + "_1");
        // }
        // userService.updateUsers(users);
        // userService.updateUserNames(users, "_666");
        // users = userService.getUsers(1);
        // System.out.println(users);

        ((ConfigurableApplicationContext) app).close();
    }
}
