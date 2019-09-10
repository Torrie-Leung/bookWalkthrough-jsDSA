//arithmetic operator
let num = 0;
num = num+2;
num = num*2;
num = num/2;
num++;
num--;

//assignment operator
num+=1;
num-=2;
num*=3;
num/=2;
num%=3;
console.log(num)

//comparison operator
console.log('num == 1: '+(num == 1))
console.log('num === 1: '+(num === 1))
console.log('num != 1: '+(num != 1))
console.log('num >1: '+(num > 1))
console.log('num <1: '+(num < 1))

//logical operator
console.log('true && false: '+(true && false));
console.log('true || false: '+(true || false));
console.log('!true: '+(!true));

//bitwise operator
//Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers.
console.log('5 & 1: ',(5 & 1))
console.log('5 | 1: ',(5 | 1))
console.log('~5 : ',(~5))
console.log('5^1 : ',(5^1))
console.log('5<<1 : ',(5<<1))
console.log('5>>1 : ',(5>>1))