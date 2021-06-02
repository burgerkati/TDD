/*
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
// Donner la taille d\'une chaine de caractères
let tailleString = function(text) {
    return text.length;
  }
// Devrait remplacer le premier e d\'une chaîne par un espace
let spaceBefore = function(string) {
    return string.replace('E', '');
}
// Devrait concatener deux chaines de caractères
let combineStrings = function(text) {
    return text.concat(' Apfel');
}
// Devrait afficher le cinquième caractère d\'une chaîne
/*
another way to pass test
var displayFifthCharacter = function(character) {
    var result = character.charAt(4);
    return result;
}
*/
displayFifthCharacter = function(text) {
  return text[4];
}
// Devrait afficher les 9 premiers caractères d\'une chaîne de caractères
let displayFirstNineChar = function(text) {
  let result = text.substr(0, 9);
  return result;
}
/*
also works
var displayFirstNineChar function(text) {
  var result = text.substring(0,9);
}
*/
// Devrait mettre en majuscule la chaîne
let capitalLetters = function(string) {
  return string.toUpperCase();
}
// Devrait mettre en minuscule la chaîne
let lowerCaseString = function(string) {
  return string.toLowerCase();
}
// Devrait supprimer les espaces avant et après la chaîne
let deleteSpaces = function(string) {
  return string.trim();
}
// Devrait afficher true si le paramètre d\'entrée de la fonction est de type string
let isItTrue = function(string) {
  if(typeof string === 'string'){
    return true;
  }
}
/*
// Devrait afficher l\'extension du fichier
The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
The pop() method removes the last element from an array and returns that element.
This method changes the length of the array.
*/
let displayFileExtension = function(string) {
  return string.split('.').pop();
}
// Devrait compter le nombre d\'espaces dans la chaîne
let countSpaces = function(string) {
  let result = string.split(' ').length -1;
  return result;
}
// Devrait inverser une chaîne de caractères
let reverseString = function(string) {
  let result = string.split('').reverse('').join('');
  return result;
}
