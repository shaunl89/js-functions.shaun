//Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.
var wordArray = ['what', 'is', 'the', 'daaaaaay', 'today']

var findLongestWord = function (arr) {
  var longestWord = ''
  for (var i = 0; i < arr.length; i++) {
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i]
    }
  }
  return longestWord
}

console.log(findLongestWord(wordArray))
