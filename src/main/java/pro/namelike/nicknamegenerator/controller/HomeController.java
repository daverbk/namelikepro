package pro.namelike.nicknamegenerator.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pro.namelike.nicknamegenerator.entity.Nickname;

@RestController
public class HomeController {

    @GetMapping("/")
    public String getHome() {
        return "homepage";
    }

    @PostMapping
    public String generateNickname(@RequestBody Nickname nickname) {
        return "Test = " + nickname.getName() + nickname.getLastName();
    }
}
