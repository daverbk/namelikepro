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

    @PostConstruct
    private void generatePrefixWords() {
        prefixWordsList.add("Killer");
        prefixWordsList.add("Pro");
        prefixWordsList.add("Hyper");
        prefixWordsList.add("Master");
        prefixWordsList.add("Destroyer");
        prefixWordsList.add("Mutant");
        prefixWordsList.add("Eagle");

        adjectivesWordsList.add("Bloody");
        adjectivesWordsList.add("Golden");
        adjectivesWordsList.add("Deadly");
        adjectivesWordsList.add("Immortal");
        adjectivesWordsList.add("Cringy");
        adjectivesWordsList.add("Sneaky");
    }

}
