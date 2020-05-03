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
console.log(num);