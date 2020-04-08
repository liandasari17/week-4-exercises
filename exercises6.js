function digitPerkalianMinimum(angka) {
  var arr = []
  var res = 0;
  
  for (var i = 0; i <= angka; i++) {
    var hasilBagi = angka / i; 
    var arrString = i.toString() + hasilBagi.toString();
    
    if(hasilBagi % 1 === 0) {
      arr.push(arrString);
      
      if(res === 0) {
        res = arrString.length;
      } else {
        if (res > arrString.length) {
          res = arrString.length;
        }
      }
    }
  }
  //console.log(arr)
  return res;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2