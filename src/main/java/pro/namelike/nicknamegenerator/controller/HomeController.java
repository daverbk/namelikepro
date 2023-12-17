package pro.namelike.nicknamegenerator.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pro.namelike.nicknamegenerator.entity.Nickname;
import pro.namelike.nicknamegenerator.service.WordsService;

import java.util.List;
import java.util.Random;

@RestController
@RequiredArgsConstructor
public class HomeController {

    private final WordsService wordsService;

    @GetMapping("/")
    public String getHome() {
        return "homepage";
    }

    @PostMapping
    public ResponseEntity<String> generateNickname(@RequestBody Nickname nickname) {

        String title;
        if (nickname.isHasPostfix()) {
            List<String> words = wordsService.getPrefixWordsList();
            Random random = new Random();
            title = words.get(random.nextInt(words.size()));
        } else {
            title = "";
        }

        String specialCharacter;
        if (nickname.isHasSpecialCharacters()) {
            specialCharacter = "***"; // add list with characters
        } else {
            specialCharacter = "";
        }

        String adjective;
        if (nickname.isHasAdjective()) {
            List<String> adjectives = wordsService.getAdjectivesWordsList();
            Random random = new Random();
            adjective = adjectives.get(random.nextInt(adjectives.size()));
        } else {
            adjective = "";
        }

        return ResponseEntity.ok(specialCharacter + adjective + nickname.getName() + nickname.getLastName() + title + specialCharacter);

    }
}
