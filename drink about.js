// Drink about
// Kids drink toddy. Teens drink coke. Young adults drink beer. Adults drink whisky. Make a function that receive age, and return what they drink. Rules: Children under 14 old. Teens under 18 old. Young under 21 old. Adults have 21 or more.

// My solution
function peopleWithAgeDrink(age) {
  if (age < 14) return 'drink toddy'
  else if (age < 18) return 'drink coke'
  else if (age < 21) return 'drink beer'
  else return 'drink whisky'
}

// Best solution
const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
    age < 18 ? "drink coke" :
      age < 21 ? "drink beer" : "drink whisky"

function peopleWithAgeDrink(age) {
  if (age < 14)
    drink = 'toddy';
  else if (age < 18)
    drink = 'coke'
  else if (age < 21)
    drink = 'beer';
  else if (age => 21)
    drink = 'whisky';

  return 'drink ' + drink;
}

const peopleWithAgeDrink = old => 'drink ' + (old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer' : 'whisky')