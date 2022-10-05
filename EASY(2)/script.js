let numArray = [1,2,3,4,5,6,7,8,9,10]
let primeArray = []

function checkPrime(number) {
    if (number <= 0) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }

  numArray.forEach(function (element) {
    const isPrime = checkPrime(element);
    if (isPrime) {
      primeArray.push(element)
    } else {
    }
  });

  console.log(primeArray)

  
