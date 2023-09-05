// Super duper easy
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// My solution
function problem(x) {
  if (typeof x == 'number') return x * 50 + 6
  else return 'Error'
}

// Best solutions
const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

function problem(x) {
  return typeof x === "number" ? x * 50 + 6 : "Error";
}