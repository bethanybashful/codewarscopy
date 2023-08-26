// Find the area of the rectangle!
// Find the area of a rectangle when provided with one diagonal and one side of the rectangle. If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". If the resultant area has decimals round it to two places.

// My solution
function area(diagonal, length) {
  if (diagonal <= length) {
    return "Not a rectangle"
  } else {
    let width = Math.sqrt(diagonal ** 2 - length ** 2)
    return +(width * length).toFixed(2)
  }
}

// Best solutions
function area(d, l) {
  return Math.round(l * Math.sqrt(d * d - l * l) * 1e2) / 1e2 || 'Not a rectangle';
}

function area(d, l) {
  return d <= l ? "Not a rectangle" : +(l * Math.sqrt((d * d) - (l * l))).toFixed(2);
}

const area = (z, a) => a >= z ? "Not a rectangle" : Math.round(a * (Math.sqrt(z * z - a * a)) * 100) / 100
