function cariModus(arr) {
  var res = []
  for(var i=0; i<arr.length; i++){
    //console.log(arr[i])
    var check = true
    for(var j=0; j<res.length; j++){
      //console.log(res[j])
      if(res[j][0] === arr[i]){
        res[j].push(arr[i])
        check = false
      }
    }
    if(check === true){
      res.push([arr[i]])
    }
  }
  //console.log(res)
  for(var i=0; i<res.length; i++){
    for(var j=0; j<res.length-1; j++){
      if(res[i].length > res[j].length){
        var temp = res[j]
        res[j] = res[i]
        res[i] = temp
      }
    }
  }
  //console.log(res)
  if(res.length === arr.length || res.length === 1){
    return -1
  }
  return res[0][0]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1