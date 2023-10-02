// Return string of first characters
// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// My solution
const makeString = s => s.split(' ').map(word => word.charAt(0)).join('')

// Best solutions
const makeString = s => s.split(' ').map(x => x[0]).join('')

function makeString(s) {
  return (s.match(/\b\w/g)).join('');
}