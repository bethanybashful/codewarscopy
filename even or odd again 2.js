// Even or odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My solution same as best
function evenOrOdd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

// Best solution
const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';
