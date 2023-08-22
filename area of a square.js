// Area of a square
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// My solution
function squareArea(A) {
  return (((A * 4) / Math.PI) / 2) ** 2
}

// Best solutions
function squareArea(A) {
  var circum = 4 * A;
  var radius = circum / (2 * Math.PI);
  var area = Math.pow(radius, 2);
  return Math.round(area * 100) / 100
}

squareArea = A => +Math.pow((2 * A / 3.1416), 2).toFixed(2);

function squareArea(A) {
  return Math.round(Math.pow(A * 2 / Math.PI, 2) * 100) / 100
}