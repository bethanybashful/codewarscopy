// Even or odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My solution
const evenOrOdd = number => number % 2 == 0 ? "Even" : "Odd"

// Best solutions
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}