/* Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.
*/

var anyChar = 'm';
var vowels = ['a', 'e', 'i', 'o', 'u'];

var isCharacterAVowel = function(char) {
  for (var i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return ('This character is a vowel!');
    }
  } return ('This character is not a vowel!');
};

console.log(isCharacterAVowel(anyChar));
