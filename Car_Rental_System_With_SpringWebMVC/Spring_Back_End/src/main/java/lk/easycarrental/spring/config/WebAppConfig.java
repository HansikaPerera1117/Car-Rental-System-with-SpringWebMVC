package lk.easycarrental.spring.config;

import lk.easycarrental.spring.advice.AppWideExceptionHandler;
import lk.easycarrental.spring.controller.LogInController;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan(basePackageClasses = {LogInController.class, AppWideExceptionHandler.class})
public class WebAppConfig {
}
