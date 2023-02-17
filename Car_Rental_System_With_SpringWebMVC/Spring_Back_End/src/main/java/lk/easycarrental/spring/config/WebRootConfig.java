package lk.easycarrental.spring.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@ComponentScan(basePackageClasses = {})
@Import({JPAConfig.class})
public class WebRootConfig {
}
