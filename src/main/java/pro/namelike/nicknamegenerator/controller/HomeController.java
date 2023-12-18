package pro.namelike.nicknamegenerator.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pro.namelike.nicknamegenerator.entity.Nickname;
import pro.namelike.nicknamegenerator.service.NicknameGeneratorService;

@RestController
@RequiredArgsConstructor
public class HomeController {
    private final NicknameGeneratorService nicknameGeneratorService;

    @GetMapping("/")
    public String getHome() {
        return "homepage";
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generateNickname(@RequestBody Nickname nickname) {
        return ResponseEntity.ok(nicknameGeneratorService.generate(nickname));
    }
}
