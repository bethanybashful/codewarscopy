// Square(n) sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// My solution
function squareSum(numbers) {
  let squared = numbers.map((x) => x ** 2)
  return squared.reduce((a, c) => a + c, 0)
}

// Best solution
function squareSum(numbers) {
  return numbers.reduce(function(sum, n) {
    return (n * n) + sum;
  }, 0)
}

function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + (num * num), 0);
}