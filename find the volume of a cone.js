// Find the volume of a cone

// Find the volume of a cone whose radius and height are provided as parameters to the function volume. Use the value of PI provided by your language (for example: Math.PI in JS, math.pi in Python or Math::PI in Ruby) and round down the volume to an Interger. If you complete this kata and there are no issues, please remember to give it a ready vote and a difficulty rating. :)

// My solution
function volume(r, h) {
  v = Math.PI * (Math.pow(r, 2)) * (h / 3)
  return Math.floor(v)
}

// Best solutions
const volume = (r, h) => ~~(Math.PI * r * r * h / 3);

function volume(r, h) {
  return Math.floor((Math.PI * r * r * h) / 3)
}