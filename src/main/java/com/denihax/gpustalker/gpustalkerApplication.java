package com.denihax.gpustalker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class gpustalkerApplication {

    public static void main(String[] args) {
        SpringApplication.run(gpustalkerApplication.class, args);
    }

}
