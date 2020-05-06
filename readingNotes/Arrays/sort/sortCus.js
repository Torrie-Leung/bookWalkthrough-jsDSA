const friends = [
  { name: 'Callum', age: 30 },
  { name: 'Eddie', age: 38 },
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
console.log(friends.sort(comparePerson));