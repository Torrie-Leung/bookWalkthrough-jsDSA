// es5
// function isEven(x){
//   // return true if x is a multiple of 2
//   console.log(x);
//   return x % 2 === 0 ? true : false;
// }
// es6
const isEven = x => {
  // console.log(x);
  return x % 2 === 0;
}

const isEvenHey = x => {
  // console.log(x);
  return x % 2 === 0 ? 'tada' : 'ahoh';
  
}

let numbers = [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15];

//Iterates every element of the array, verifying the desired condition (function) until false is returned.
// let num = numbers.every(isEven);

//Iterates every element of the array, verifying the desired condition (function) until true is returned.
// let num = numbers.some(isEven);

// If we need the array to be completely iterated no matter what, we can use the forEach function.
const res = []
numbers.forEach(x =>{
  if(x % 2 === 0){
    res.push(x)
  }
})
console.log(res);

//Creates a new array from a function that contains the criterion/condition and returns the elements of the array that match the criterion.
const myMap = numbers.map(isEvenHey);
console.log(myMap);
// filter: Creates an array with each element that evaluates to true in the function provided.
const evenN = numbers.filter(isEven);
console.log(evenN);

//reduce receives a function with the following parameters: preV,currV,index and arr(last two are optional)
const reduceRes = numbers.reduce((pre,curr,i) => {
  console.log(pre,curr,'-index:',i);
  return pre + curr
},0)
console.log(reduceRes);