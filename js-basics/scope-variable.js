var myV = 'global';
myOtherV = 'global';

function myFunc(){
  var myV = 'local';
  return myV;
}

function myOtherF(){
  myOtherV = 'local';
  return myOtherV;
}

console.log(myV);//global--refering to a global variable
console.log(myFunc());//local--the scope will only be inside myFunc

console.log(myOtherV);//global
console.log(myOtherF());//local
console.log(myOtherV);//local

// whenever possible, try avoiding global variables