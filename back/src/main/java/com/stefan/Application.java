package com.stefan;


import org.omg.CORBA.Environment;

import javax.annotation.Resource;

@SpringBootApplication(scanBasePackages = {'com.stefan'})
public class Application {
    @Resource
    private Environment environment;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
