describe('Les chaines de caractères : ', function () {//on décrit la fonctionnalité
  // "it" indique le comportement attendu
    it('Donner la taille d\'une chaine de caractères', function () {
      // on crée un exemple
        let result = tailleString('Ce texte à une certaine taille');
        // on donne le reésultat attendu
        expect(result).toEqual(30);
    });

    it('Devrait remplacer le premier e d\'une chaîne par un espace', function () {
        let result = spaceBefore('Elephant');
        expect(result).toEqual('lephant');
        // .toContain also works - it's a matcher
  });
    it('Devrait concatener deux chaines de caractères', function () {
        let result = combineStrings('Apple');
        expect(result).toContain('Apple Apfel');
      });

    it('Devrait afficher le cinquième caractère d\'une chaîne', function () {
        let result = displayFifthCharacter('Verboten')
        expect(result).toMatch('o');
        // .toBeTruthy also works but here we're looking for a match
    });

    it('Devrait afficher les 9 premiers caractères d\'une chaîne de caractères', function () {
        let result = displayFirstNineChar('Grundnisse');
           expect(result).toMatch('Grundniss');
    });

    it('Devrait mettre en majuscule la chaîne', function () {
        let result = capitalLetters('vogel');
        expect(result).toMatch('VOGEL');
    });

    it('Devrait mettre en minuscule la chaîne', function () {
        let result = lowerCaseString('MACHEN');
        expect(result).toMatch('machen');
    });

    it('Devrait supprimer les espaces avant et après la chaîne', function () {
        let result = deleteSpaces(' Ich habe kein Zeit ');
        expect(result).toEqual('Ich habe kein Zeit')
    });

    it('Devrait afficher true si le paramètre d\'entrée de la fonction est de type string', function () {
        let result = isItTrue('Ist das wahr?');
        expect(result).toBeTrue();
    });
    it('Devrait afficher l\'extension du fichier', function () {
        let result = displayFileExtension('hund.jpg');
        expect(result).toEqual('jpg');
    });
    it('Devrait compter le nombre d\'espaces dans la chaîne', function () {
        let result = countSpaces('Du bist nicht Lustig');
        expect(result).toEqual(3);
    });
    it('Devrait inverser une chaîne de caractères', function () {
        let result = reverseString('Hallo Leute');
        expect(result).toEqual('etueL ollaH');
    });
})
