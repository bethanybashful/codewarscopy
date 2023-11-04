// Number of divisions
// Calculate how many times a number can be divided by a given number.
// Example
// For example the number 6 can be divided by 2 two times:
// 1. 6 / 2 = 3
// 2. 3 / 2 = 1 remainder = 1
// 100 can be divided by 2 six times:
// 1. 100 / 2 = 50
// 2. 50 / 2 = 25
// 3. 25 / 2 = 12 remainder 1
// 4. 12 / 2 = 6
// 5. 6 / 2 = 3
// 6. 3 / 2 = 1 remainder 1

// My attempt
// Idk it wasn't saved lol

// Top solution
// I'll be honest, a lot of the top solutions look like absolute TERROR. I don't understand them at all. Here is the link to the kata in case you want to go back and look at them.
// https://www.codewars.com/kata/5913152be0b295cf99000001/solutions
const divisions = (n, divisor) => {
  if (n === divisor) return 1;

  let count = 0;
  for (let i = n; i > divisor; i /= divisor) {
    count += 1;
  }
  return count;
};