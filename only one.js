// Only one
// Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.

// My attempt, I'm sick:(
function onlyOne(arr) {
  //   const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
  // const regex = /[A-Z]/g;
  // const found = paragraph.match(regex);
  // console.log(found);
  // // Expected output: Array ["T", "I"]
  return
  arr.match(/true/g);
}

// Top solutions
const onlyOne = (...args) => args.filter(Boolean).length === 1

function onlyOne() {
  var count = 0;
  for (var i = 0; i < arguments.length; ++i)
    if (arguments[i])
      count++;
  return count == 1;
}