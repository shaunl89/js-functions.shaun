var num = 7
var testPrime

var isPrime = function (num) {
  for (i = 2; i < num; i++) {
    testPrime = num % i
    console.log(testPrime)
    if ( testPrime == 0) {
      return "Number is not a prime"
    }
  }return "Number is a prime"
}

isPrime(num)
