package pro.namelike.nicknamegenerator.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Random;

@Configuration
public class BeanConfiguration {
    @Bean
    public Random getRandom() {
        return new Random();
    }
}
