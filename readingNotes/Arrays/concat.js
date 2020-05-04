//concat: join multiple arrays and returns a copy of the joined arrays
//Consider a scenario where you have different arrays and you need to join all of them into a single array.
const zero = 0;
const positiveN = [1,2,3];
const negativeN = [-3,-2,-1];
let numbers = negativeN.concat(zero,positiveN);
console.log(numbers);