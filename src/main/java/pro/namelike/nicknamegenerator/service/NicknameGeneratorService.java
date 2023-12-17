package pro.namelike.nicknamegenerator.service;

import lombok.*;
import org.springframework.stereotype.Service;
import pro.namelike.nicknamegenerator.entity.Nickname;

import java.util.List;
import java.util.Random;

@Getter
@Setter
@Service
@RequiredArgsConstructor
public class NicknameGeneratorService {
    private final Random random;
    private final WordsService wordsService;

    public String generate(Nickname nickname) {
        StringBuilder sb = new StringBuilder();

        if (nickname.isHasAdjective()) {
            List<String> adjectives = wordsService.getAdjectivesWordsList();
            sb.append(adjectives.get(random.nextInt(adjectives.size())));
        }

        sb.append(changeName(nickname.getFirstName(), nickname.getLastName()));

        if (nickname.isHasPostfix()) {
            List<String> words = wordsService.getPrefixWordsList();
            sb.append(words.get(random.nextInt(words.size())));
        }

        if (nickname.isHasSpecialCharacters()) {
            List<Character> chars = wordsService.getSpecialCharactersList();
            char specialCharacter = chars.get(random.nextInt(chars.size()));
            sb.insert(0, new char[] { specialCharacter, ' ' }, 0, 2);
            sb.append(" ").append(specialCharacter);
        }

        return sb.toString();
    }

    private String changeName(String firstName, String lastName) {
        return firstName.substring(0, firstName.length() / 2) + lastName.substring(0, lastName.length() / 2);
    }
}
