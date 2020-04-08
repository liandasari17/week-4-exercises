function checkAB(num) {
    var arrNum= []
    for(var i=0; i<num.length; i++){
      if(num[i] !== ' '){
        arrNum.push(num[i])
      }
    }
    //console.log(arrNum)
    for(var j=0; j<arrNum.length; j++){
      if(arrNum[j] === 'a'){
        for(var y=j; y<=(j+3); y++){
          if(arrNum[y] === 'b'){
            return true
          }
        }
      }
    }
    return false
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false