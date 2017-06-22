
// isPrime(num)

// Create a function to return true or false if a number passed in a prime number.

var num = 7

var isPrime = function (num) {
  for (i = 2; i < num; i++) {
    var testPrime = num % i
    //console.log(testPrime)
    if ( testPrime === 0) {
      return "Number is not a prime"
    }
  }
  return "Number is a prime"
}
// isPrime(num)

// primes(max)

// Using your isPrime() function, create a function primes that will return an array of all prime numbers up to a certain amount.

var primes = function(num) {
  for (var j = 0; j < num; j++) {
    if (isPrime(j) ==='Number is a prime')
      console.log(j)
  }
}

primes(15)
