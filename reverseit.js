// Reverse It
// You have to create a function named reverseIt. Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. If the data is any other type, return it as it is.

// My solution
function reverseIt(data) {
  if (typeof data === "string") return data.split('').reverse().join('')
  else if (typeof data === "number") return parseFloat(data.toString().split('').reverse().join(''))
  else return data
}

// Best solutions
function reverseIt(data) {
  if (typeof data === 'string') {
    return data.split("").reverse().join("");
  }
  if (typeof data === 'number') {
    var a = +(data.toString().split("").reverse().join(""));
    return a;
  }
  return data;
}

function reverseIt(data) {
  switch (typeof data) {
    case 'string': return data.split("").reverse().join("");
    case 'number': return parseFloat(String(data).split("").reverse().join(""));
    default: return data;
  }
}