//function: DEC to Binary
function dec2bin(decNum) {
  //1. define a stack
  let stack = new Stack()
  //2. loop
  while(decNum > 0) {
    //2.1 mod and push it to the stack
    stack.push(decNum%2)
    //2.2 get the next loop's starter
    decNum = Math.floor(decNum/2)
  }
  //3.get the bunch of 0 and 1 from stack
  let binaryString = ''
  while(!stack.isEmpty()){
    binaryString += stack.pop()
  }
  return binaryString
}

//test result
console.log(dec2bin(100))
console.log(dec2bin(230))