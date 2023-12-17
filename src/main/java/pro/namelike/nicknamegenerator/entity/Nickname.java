package pro.namelike.nicknamegenerator.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Nickname {
    private String name;
    private String lastName;
    private boolean hasPostfix;
    private boolean hasSpecialCharacters;
    private boolean hasAdjective;
}
