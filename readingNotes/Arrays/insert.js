const num = [0,1,2,3,4,5,6,7,8,9];
num[num.length] = 10
num.push(11);
num.push(12,13);
// console.log(num);

// unshift under the hood
Array.prototype.insert1stPosition = function(val){
  for(let i = this.length; i > 0; i--){
    this[i] = this[i - 1];
  }
  this[0] = val;
}
num.insert1stPosition(-1);
num.unshift(-2);
num.unshift(-4,-3);
// remove a value from the end of an array
num.pop();

// to avoid undefined in array after pop
Array.prototype.reIdx = function(myArr){
  const newArr = [];
  for(let i = 0; i < myArr.length; i++){
    if(myArr[i] !== undefined){
      newArr.push(myArr[i]);
    }
  }
  return newArr;
}
Array.prototype.rmvstPosition = function(){
  for(let i = 0; i < this.length; i++){
    this[i] = this[i + 1];
  }
  return this.reIdx(this)
}
// console.log(num.rmvstPosition())
// The preceding code should be used only for educational purposes and should not be used in real projects. 
console.log(num.shift());
console.log(num);
