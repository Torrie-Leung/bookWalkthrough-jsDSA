// find out the first 20 numbers of the Fibonacci sequence
// the first two numbers of the Fibonacci sequence are 1 and 2, and each subsequent number is the sum of the previous two numbers;
const fibo = [];
let num = 10;
fibo[1] = 1;
fibo[2] = 1;

for(let i = 3; i < num; i++){
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
for(let i = 1; i < fibo.length; i++){
  console.log(fibo[i]);
}