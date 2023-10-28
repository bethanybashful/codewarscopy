// How good are you really?
// There was a test in your class and you passed it. Congratulations! But you're an ambitious person. You want to know if you're better than the average student in your class. You receive an array with your peers' test scores. Now calculate the average and compare your score! Return True if you're better, else False!

// My solution same as top
const betterThanAverage = (classGrades, myGrade) => ((classGrades.reduce((a, c) => a + c, 0)) / classGrades.length) < myGrade;

// Top solutions
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}