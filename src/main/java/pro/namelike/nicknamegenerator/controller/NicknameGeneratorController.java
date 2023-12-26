package pro.namelike.nicknamegenerator.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pro.namelike.nicknamegenerator.dto.NicknameResponseDto;
import pro.namelike.nicknamegenerator.entity.Nickname;
import pro.namelike.nicknamegenerator.service.NicknameGeneratorService;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class NicknameGeneratorController {
    private final NicknameGeneratorService nicknameGeneratorService;

    @PostMapping("/generate")
    public ResponseEntity<NicknameResponseDto> generateNickname(@RequestBody Nickname nickname) {
        String generatedNickname = nicknameGeneratorService.generate(nickname);
        return ResponseEntity.ok(new NicknameResponseDto(generatedNickname));
    }
}
