// Each row represents a day, and each column represents the temperature for each hour of the day.
let avrTemp = [];
avrTemp[0] = [29,30,33,30,31,32];
avrTemp[1] = [27,28,30,30,33,33];
console.table(avrTemp);

function printMatrx(myMatrix){
  for(let i = 0; i < myMatrix.length; i++){
    for(let j = 0; j < myMatrix[i].length; j++){
      console.log(myMatrix[i][j]);
    }
  }
}
printMatrx(avrTemp)