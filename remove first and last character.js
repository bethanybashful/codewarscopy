// Remove first and last character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// My solution, same as best
function removeChar(str) {
  return str.slice(1, -1)
};

// Best solution
const removeChar = str => str.slice(1, -1)

function removeChar(str) {
  return str.substring(1, str.length - 1);
};