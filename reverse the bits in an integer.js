// Reverse the bits in an integer
// Write a function that reverses the bits in an integer. For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267. You can assume that the number is not negative.

// My solution (same as best!)
function reverseBits(number) {
  let binary = number.toString(2).split('').reverse().join('')
  return parseInt(binary, 2)
}

// Best solution
function reverseBits(num) {
  return parseInt(num.toString(2).split("").reverse().join(""), 2);
}

let reverseBits = n => parseInt([...n.toString`2`].reverse``.join``, 2)