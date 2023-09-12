// Count vowels
//

// My solution
function getCount(str) {
  var count = str.match(/[aeiou]/gi);
  return count === null ? 0 : count.length;
}

// Best solutions