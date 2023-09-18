// How good are you really?
// There was a test in your class and you passed it. Congratulations! But you're an ambitious person. You want to know if you're better than the average student in your class. You receive an array with your peers' test scores. Now calculate the average and compare your score! Return True if you're better, else False!

// My solution
function betterThanAverage(classGrades, myGrade) {
  let average = (classGrades.reduce((a, c) => a + c, 0)) / classGrades.length
  return average < myGrade ? true : false;
}

// Best solution
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}