// Find the position!
// When provided with a letter, return its position in the alphabet. Input :: "a". Output :: "Position of alphabet: 1"

// My solution
function position(letter) {
  const differenceCharcode = 96;
  const letterPosition = letter.charCodeAt() - differenceCharcode;
  return `Position of alphabet: ${letterPosition}`
}

// Best solution
function position(letter) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}

position = l => `Position of alphabet: ${l.charCodeAt() - 96}`;
