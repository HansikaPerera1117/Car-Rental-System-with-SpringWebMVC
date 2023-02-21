package lk.easycarrental.spring.config;

import lk.easycarrental.spring.repo.UserRepo;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(basePackageClasses = {UserRepo.class})
public class JPAConfig {

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource ds, JpaVendorAdapter jpa){
        LocalContainerEntityManagerFactoryBean bean = new LocalContainerEntityManagerFactoryBean();
        bean.setPackagesToScan("lk.easycarrental.spring.entity");
        bean.setDataSource(ds);
        bean.setJpaVendorAdapter(jpa);
        return bean;
    }

    @Bean
    public DataSource dataSource(){
        DriverManagerDataSource ds =new DriverManagerDataSource();
        ds.setDriverClassName("com.mysql.jdbc.Driver");
        ds.setUrl("jdbc:mysql://localhost:3306/CarRentalSystem?createIfNotExist=true");
        ds.setUsername("root");
        ds.setPassword("1234");
        return ds;
    }
}
