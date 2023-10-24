// Katastrophy!
//

// My attempt
// I didn't know how to sum the internal arrays but it's as easy as just nesting the reduce apparently lol
function strongEnough(earthquake, age) {
  //return earthquake.reduce((a,c) => a + c, 0)

  for (let i = 0; i < earthquake.length; i++) {
    return earthquake[i].reduce((a, c) => a + c, 0)
  }

}

// Best solution
function strongEnough(earthquake, age) {
  earthquake = earthquake.reduce((s, v) => s * v.reduce((x, s) => x + s, 0), 1);
  var strength = 1000 * Math.pow(.99, age);
  return strength > earthquake ? 'Safe!' : 'Needs Reinforcement!';
}