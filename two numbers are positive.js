// Two numbers are positive

// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false

// My solution
function twoArePositive(a, b, c) {
  return (a > 0 && b > 0 && c <= 0 || b > 0 && c > 0 && a <= 0 || c > 0 && a > 0 && b <= 0) ? true : false
}

// Best solutions
// if the length of the filter method is 2, then it means that only two numbers are positive
function twoArePositive(a, b, c) {
  return [...arguments].filter(i => i > 0).length === 2;
};

function twoArePositive(a, b, c) {
  return (a > 0) + (b > 0) + (c > 0) == 2;
}