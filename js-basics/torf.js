console.log('Bender' == true);//it converts the boolean value using toNumber so we hav Bender == 1
console.log('Bender' == false);//it converts the boolean value using toNumber so we hav Bender == 0


function testTruthy(val){
  return val ? console.log(`${val} is`,'truthy'):console.log(`${val} is`,'falsy')
}

testTruthy(true);
testTruthy(false);
testTruthy(new Boolean(false)); // object is always true

testTruthy('')
testTruthy('Bender')
testTruthy(new String(''));// object is always true

testTruthy(1)
testTruthy(-1)//true the result is false for +0, -0 or NaN
testTruthy(NaN)
testTruthy(new Number(NaN));// object is always true

testTruthy({});// object is always true

const T = {name: 'Callum'};
testTruthy(T)
testTruthy(T.name)
testTruthy(T.monkey)