// Write a function that takes an array of numbers, and returns the sum of each number multiplied by its index.

var arr = [1, 2, 3, 4];

var sillySum = function(array, index) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i] * index;
  } return sum;
};

console.log(sillySum(arr, 3));
