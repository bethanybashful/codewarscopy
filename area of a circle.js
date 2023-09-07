// Area of a circle
// Complete the function which will return the area of a circle with the given radius. Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.

// My solution
function circleArea(radius) {
  if (radius > 0) return +(Math.PI * (radius ** 2)).toFixed(2)
  else if (isNaN(radius) != 'number') return false;
};

// Best solution
var circleArea = function(radius) {
  return radius > 0 ? +(radius * radius * Math.PI).toFixed(2) : false;
};