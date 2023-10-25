// Katastrophy!
// A building will fall if the magnitude of the earthquake is greater than the strength of the building.
// An earthquake takes the form of a 2D-Array. Each element within the Outer-Array represents a shockwave, and each element within the Inner-Arrays represents a tremor. The magnitude of the earthquake is determined by the product of the values of its shockwaves. A shockwave is equal to the sum of the values of its tremors.
// Example earthquake --> [[5,3,7],[3,3,1],[4,1,2]] ((5+3+7) * (3+3+1) * (4+1+2)) = 735
// A building begins with a strength value of 1000 when first built, but this value is subject to exponential decay of 1% per year. For more info on exponential decay, follow this link - https://en.wikipedia.org/wiki/Exponential_decay
// Given an earthquake and the age of a building, write a function that returns "Safe!" if the building is strong enough, or "Needs Reinforcement!" if it falls.

// My solution
function strongEnough(earthquake, age) {
  let earthquakeStrength = earthquake.reduce((a, c) => a * c.reduce((a, c) => a + c, 0), 1)
  let buildingStrength = 1000 * Math.pow(0.99, age)
  return earthquakeStrength < buildingStrength ? "Safe!" : "Needs Reinforcement!"
}

// Best solutions
function strongEnough(earthquake, age) {
  earthquake = earthquake.reduce((s, v) => s * v.reduce((x, s) => x + s, 0), 1);
  var strength = 1000 * Math.pow(.99, age);
  return strength > earthquake ? 'Safe!' : 'Needs Reinforcement!';
}

function strongEnough(earthquake, age) {
  return earthquake.reduce((p, a) => p * a.reduce((s, n) => s + n, 0), 1) > 1000 * Math.pow(0.99, age) ? 'Needs Reinforcement!' : 'Safe!';
}

function strongEnough(earthquake, age) {
  return earthquake.reduce((x, [a, b, c]) => x * (a + b + c), 1) < 1000 * Math.pow(1.01, -age) ? 'Safe!' : 'Needs Reinforcement!';
}