// Surface area and volume of a box
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// My solution
function getSize(width, height, length) {
  let area = 2 * (length * width + length * height + height * width)
  let volume = width * height * length
  let arr = [area, volume]
  return arr
}

// Best solutions
const getSize = (w, h, d) => [
  (w * h + w * d + h * d) * 2,
  w * h * d
];

function getSize(w, h, d) {
  var area = (2 * d * h) + (2 * w * h) + (2 * d * w);
  var volume = d * w * h;
  return [area, volume];
}