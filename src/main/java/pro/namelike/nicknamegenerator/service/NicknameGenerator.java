package pro.namelike.nicknamegenerator.service;

import lombok.*;

import java.util.List;

@Getter
@Setter
public class NicknameGenerator {
    List<String> words;

    public String generate() {
        StringBuilder sb = new StringBuilder();
        for (String word : words) {
            sb.append(word);
        }
        return sb.toString();
    }
}
