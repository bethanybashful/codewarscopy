// Sum of positive
// You get an array of numbers, return the sum of all of the positives ones. Example [1,-4,7,12] => 1 + 7 + 12 = 20

// My solution
const positiveSum = arr => arr.filter(num => num > -1).reduce((a,c) => a + c, 0)

// Best solutions
function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}