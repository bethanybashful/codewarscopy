// Return negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// My solution
function makeNegative(num) {
    if (Math.sign(num) === 1){
      return num *= -1
    }else if (Math.sign(num) === -1){
      return num
    }else{
      return Math.abs(num)
    }
}

// Best solutions
function makeNegative(num) {
    return -Math.abs(num);
}

function makeNegative(num) {
    return num < 0 ? num : -num;
}

function makeNegative(num) {
    return num > 0 ? -num : num;
}