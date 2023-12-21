package pro.namelike.nicknamegenerator.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pro.namelike.nicknamegenerator.entity.Nickname;
import pro.namelike.nicknamegenerator.service.NicknameGeneratorService;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000/")
public class NicknameGeneratorController {
    private final NicknameGeneratorService nicknameGeneratorService;

    @PostMapping("/generate")
    public ResponseEntity<String> generateNickname(@RequestBody Nickname nickname) {
        return ResponseEntity.ok(nicknameGeneratorService.generate(nickname));
    }
}
