// FizzBuzz game
// Count from 1 to 20
// If number is divisible by 3, print 'Fizz'
// If number is divisible by 5, print 'Buzz'
// If number is divisible by 3 AND 5, print 'FizzBuzz'

for (var i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) { // Needs this condition first
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  };
}
