// Number of decimal digits
// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// My solution
const digits = n => n.toString().length;

// Best solutions
function digits(n) {
  return String(n).length
}

function digits(n) {
  return `${n}`.length;
}