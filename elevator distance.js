// Elevator distance
// Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance. Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// My solution
function elevatorDistance(array) {
  let distance = 0;
  for (let i = 0; i < array.length - 1; i++) {
    distance += Math.abs(array[i] - array[i + 1]);
  }
  return distance;
}

// Best solutions
function elevatorDistance(array) {
  var distance = 0;
  for (var i = 0; i < array.length - 1; i++) {
    distance += Math.abs(array[i] - array[i + 1]);
  }
  return distance;
}

function elevatorDistance(array) {
  return array.slice(1).reduce((s, n, i) => s + Math.abs(n - array[i]), 0)
}