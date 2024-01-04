package pro.namelike.nicknamegenerator.service;

import jakarta.annotation.PostConstruct;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Getter
@Setter
@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
public class WordsService {

    private final List<String> prefixWordsList;

    private final List<String> adjectivesWordsList;

    private final List<Character> specialCharactersList;

    @PostConstruct
    private void generatePrefixWords() {
        prefixWordsList.add("Killer");
        prefixWordsList.add("Pro");
        prefixWordsList.add("Hyper");
        prefixWordsList.add("Master");
        prefixWordsList.add("Destroyer");
        prefixWordsList.add("Mutant");
        prefixWordsList.add("Eagle");
        prefixWordsList.add("Shadow");
        prefixWordsList.add("Phoenix");
        prefixWordsList.add("Rogue");
        prefixWordsList.add("Titan");
        prefixWordsList.add("Maverick");
        prefixWordsList.add("Paladin");
        prefixWordsList.add("Wizard");
        prefixWordsList.add("Samurai");
        prefixWordsList.add("Ghost");
        prefixWordsList.add("Hunter");
        prefixWordsList.add("Ninja");
        prefixWordsList.add("Gladiator");
        prefixWordsList.add("Dragon");
        prefixWordsList.add("Warlock");
        prefixWordsList.add("Sniper");
        prefixWordsList.add("Juggernaut");
        prefixWordsList.add("Assassin");
        prefixWordsList.add("Centurion");
        prefixWordsList.add("Berserk");
        prefixWordsList.add("Cyborg");
        prefixWordsList.add("Specter");
        prefixWordsList.add("Vanguard");
        prefixWordsList.add("Enigma");
        prefixWordsList.add("Valkyrie");
        prefixWordsList.add("Corsair");
        prefixWordsList.add("Sentinel");
        prefixWordsList.add("Wraith");
        prefixWordsList.add("Templar");
        prefixWordsList.add("Avenger");
        prefixWordsList.add("Outlaw");

        adjectivesWordsList.add("Bloody");
        adjectivesWordsList.add("Golden");
        adjectivesWordsList.add("Deadly");
        adjectivesWordsList.add("Immortal");
        adjectivesWordsList.add("Cringy");
        adjectivesWordsList.add("Sneaky");
        adjectivesWordsList.add("Sparkling");
        adjectivesWordsList.add("Radiant");
        adjectivesWordsList.add("Mighty");
        adjectivesWordsList.add("Cosmic");
        adjectivesWordsList.add("Whimsical");
        adjectivesWordsList.add("Mystical");
        adjectivesWordsList.add("Dynamic");
        adjectivesWordsList.add("Electric");
        adjectivesWordsList.add("Spirited");
        adjectivesWordsList.add("Wondrous");
        adjectivesWordsList.add("Luminous");
        adjectivesWordsList.add("Legendary");
        adjectivesWordsList.add("Vibrant");
        adjectivesWordsList.add("Gleaming");
        adjectivesWordsList.add("Stellar");
        adjectivesWordsList.add("Enchanting");
        adjectivesWordsList.add("Courageous");
        adjectivesWordsList.add("Playful");
        adjectivesWordsList.add("Majestic");
        adjectivesWordsList.add("Dazzling");
        adjectivesWordsList.add("Vivid");
        adjectivesWordsList.add("Energetic");
        adjectivesWordsList.add("Fierce");
        adjectivesWordsList.add("Brilliant");
        adjectivesWordsList.add("Jubilant");
        adjectivesWordsList.add("Resilient");
        adjectivesWordsList.add("Magical");
        adjectivesWordsList.add("Swift");
        adjectivesWordsList.add("Bold");
        adjectivesWordsList.add("Serene");
        adjectivesWordsList.add("Fantastic");
        adjectivesWordsList.add("Dashing");
        adjectivesWordsList.add("Exuberant");

        specialCharactersList.add('\u2601');
        specialCharactersList.add('\u2605');
        specialCharactersList.add('\u2620');
        specialCharactersList.add('\u00A9');
        specialCharactersList.add('\u0099');
        specialCharactersList.add('\u058D');
        specialCharactersList.add('\u07F7');
        specialCharactersList.add('\u21A0');
        specialCharactersList.add('\u21C9');
        specialCharactersList.add('\u2194');
        specialCharactersList.add('\u229D');

    }
}
