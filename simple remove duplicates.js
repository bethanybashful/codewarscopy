// Simple remove duplicates
// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// My solution
const solve = arr => arr.filter((item, index) => arr.lastIndexOf(item) === index)

// Best solutions
function solve(arr) {
  return arr.filter((val, i) => arr.lastIndexOf(val) == i);
}

const solve = arr => [...new Set(arr.reverse())].reverse()