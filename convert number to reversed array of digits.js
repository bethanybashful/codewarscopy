// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// My solution basically same as top
const digitize = n => n.toString().split('').reverse().map(Number);

// Top solutions
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

function digitize(n) {
  return (n + '').split('').map(Number).reverse();
}