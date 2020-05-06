const numbers = [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15];
numbers.reverse();
numbers.sort((a,b) => a - b);
console.log(numbers);

//The previous code can be represented by the following code as well
const nums = [1, 2, 3,4,5,6,7,8,9,10,11,12];
function compare(a,b){
  if(a < b){
    return -1;
  }
  if(a > b){
    return 1;
  }
  return 0;
}
nums.sort(compare)
console.log(nums);