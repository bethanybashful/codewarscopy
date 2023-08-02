// Miles per gallon to kilometers per liter

// Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl). Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input). Make sure to round off the result to two decimal points.

// Some useful associations relevant to this kata:
// 1 Imperial Gallon = 4.54609188 litres
// 1 Mile = 1.609344 kilometres

// My solution
function converter (mpg) {
    let kpl = (mpg * 1.609344) / 4.54609188
    return Number(kpl.toFixed(2))
}

// Best solutions
var LITRES_PER_GALLON = 4.54609188;
var KILOMETERS_PER_MILE = 1.609344;
function converter (mpg) {
  return Math.round(100 * mpg * KILOMETERS_PER_MILE / LITRES_PER_GALLON) / 100;
}

function converter (mpg) {
    return +(mpg * .354006043538).toFixed(2)
  }