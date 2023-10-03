// Return negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// My solution
const makeNegative = num => num > 0 ? -num : num

// Best solution
function makeNegative(num) {
  return -Math.abs(num);
}