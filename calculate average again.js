// Calculate average
// Write a function which calculates the average of the numbers in a given list.

// My solution same as best
const findAverage = array => array.length > 0 ? (array.reduce((a, b) => a + b, 0)) / array.length : 0;

// Best solution
var find_average = (array) => {
  return array.length === 0 ? 0 : array.reduce((acc, ind) => acc + ind, 0) / array.length
}

function find_average(array) {
  if (array.length === 0) {
    return 0;
  }
  var result = 0;
  for (i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result / array.length;
}