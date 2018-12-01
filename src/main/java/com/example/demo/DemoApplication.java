package com.example.demo;

import org.apache.logging.log4j.LogManager;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.apache.logging.log4j.Logger;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	// creating log4j bean
	@Bean
	public Logger getLogger() {
		return LogManager.getLogger(DemoApplication.class);
	}
}
