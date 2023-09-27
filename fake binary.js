// Fake binary
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// My solution
function fakeBin(str) {
  return str.split('').map(x => x < 5 ? 0 : 1).join('');
}

// Best solutions
function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

function fakeBin(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (Number(str[i]) >= 5) {
      newStr += "1"
    }
    else {
      newStr += "0";
    }
  }
  return newStr;
}

function fakeBin(x) {
  return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1")
}