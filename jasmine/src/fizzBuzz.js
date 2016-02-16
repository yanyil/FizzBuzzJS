function FizzBuzz() {
  var array = [];
  for (var i = 0; i < 100; i++) {
    if ((i + 1) % 15 === 0) {
      array[i] = "FizzBuzz"
    } else if ((i + 1) % 3 === 0) {
      array[i] = "Fizz"
    } else if ((i + 1) % 5 === 0) {
      array[i] = "Buzz"
    }
    else {
      array[i] = i + 1;
    }
  }
  return array;
};