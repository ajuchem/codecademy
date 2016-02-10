// If number received is evenly divisible by 2 (modulo %)
// Check to see if parameter received is NaN

var isEven = function(number) {
  if ((number % 2) === 0) {
      return true;
  } else if (isNaN(number)){
      return "This is not a number!";
  } else {
      return false;
  }
};
