package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@EnableWebMvc
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/css/**")
                .addResourceLocations("classpath:/public/css/");
        registry.addResourceHandler("/img/**")
                .addResourceLocations("classpath:/public/img/");
        registry.addResourceHandler("/js/**")
                .addResourceLocations("classpath:/public/js/");
    }
}

