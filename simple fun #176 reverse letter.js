// Simple Fun #176: Reverse Letter
// Given a string str, reverse it and omit all non-alphabetic characters.
// Example
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".

// My solution same as best
const reverseLetter = str => str.replace(/[^a-z]/gi, '').split('').reverse().join('');

// Best solutions
reverseLetter = (s) => s.replace(/[^a-z]/gi, '').split('').reverse().join('');

const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');

function reverseLetter(str) {
  //coding and coding..
  return str.match(/[a-z]/ig).reverse().join('');
}