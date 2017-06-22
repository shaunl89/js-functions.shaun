// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var arr = [1, 2, 3, 4];
var sumArray = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  } return sum;
};

var multiplyArray = function(array) {
  var mul = 1;
  for (var j = 0; j < array.length; j++) {
    mul *= array[j];
  } return mul;
};
console.log(sumArray(arr));
console.log(multiplyArray(arr));
