// To square(root) or not to square(root)
// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this: If the number has an integer square root, take this, otherwise square the number.

// My attempt
function squareOrSquareRoot(array) {
  //return array.map((x) => (Math.sqrt(x)).isInteger(x) ? Math.sqrt(x) : x ** 2)
  //return array.map((x) => (Math.sqrt(x)).isInteger(x))
  return array.map((x) => array.isInteger(Math.sqrt(x)))
}

// Best solutions
function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x * x);
  });
}

const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));

function squareOrSquareRoot(array) {
  return array.map(e => Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e * e);
}