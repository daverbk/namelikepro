package pro.namelike.nicknamegenerator.functions;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import pro.namelike.nicknamegenerator.dto.NicknameResponseDto;
import pro.namelike.nicknamegenerator.entity.Nickname;
import pro.namelike.nicknamegenerator.service.NicknameGeneratorService;

import java.util.function.Function;

@Configuration
public class NicknameGeneration {
    private final NicknameGeneratorService nicknameGeneratorService;

    public NicknameGeneration(NicknameGeneratorService nicknameGeneratorService) {
        this.nicknameGeneratorService = nicknameGeneratorService;
    }

    @Bean
    public Function<Nickname, NicknameResponseDto> create() {
        return (nickname) -> {
            String generatedNickname = nicknameGeneratorService.generate(nickname);
            return new NicknameResponseDto(generatedNickname);
        };
    }
}
