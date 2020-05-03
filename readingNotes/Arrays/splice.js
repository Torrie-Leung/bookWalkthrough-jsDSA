//to avoid undefined element left, we should always use the splice, pop, or shift methods to remove elements. 
const num = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12];
num.splice(5,3);
console.log(num);
num.splice(5,0,2,3,4)
console.log('back',num);
//The first argument of the method is the index we want to remove elements from or insert elements into.
//The second argument is the number of elements we want to remove (in this case, we do not want to remove any, so we will pass the value 0 (zero)). 
//from the third argument onward we have the values we would like to insert into the array
const nu = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12];
nu.splice(5,3,2,3,4)
console.log('nu',nu);