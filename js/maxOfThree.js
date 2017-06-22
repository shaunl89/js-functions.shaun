// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

var maxOfThree = function(num1, num2, num3) {
  var max = 0;
  if (num1 > max) {
    max = num1;
  }
  if (num2 > max) {
    max = num2;
  }
  if (num3 > max) {
    max = num3;
  } return max;
};

console.log(maxOfThree(3, 5, 10));
