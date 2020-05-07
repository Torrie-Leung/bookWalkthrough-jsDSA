//sort an array with any type of object in it
const friends = [
  { name: 'Callum', age: 30 },
  { name: 'Eddie', age: 38 },
  { name: 'ellen', age: 38 },
  { name: 'Wendy', age: 26 }, 
];
function comparePerson(a,b){
  if(a.age < b.age){
    return -1;
  }
  if(a.age > b.age){
    return 1;
  }
  return 0;
}
function sortNameAlphabet(a,b){
  if(a.name.toLowerCase() < b.name.toLowerCase()){
    return -1;
  }
  if(a.name.toLowerCase() > b.name.toLowerCase()){
    return 1;
  }
  return 0;
}
console.log(friends.sort(comparePerson));
console.log(friends.sort(sortNameAlphabet));