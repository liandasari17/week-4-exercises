function cariModus(arr) {
    var tampung = []
    for(var i=0; i<arr.length; i++){
      for(var j=0; j< arr.length; j++){
        if(arr[j] > arr[j+1]){
          temp= arr[j+1]
          arr[j+1] = arr[j]
          arr[j]= temp
        }
      }
    }
    //console.log(arr)
    for(var k=0; k<arr.length; k++){
      if(arr[k] === arr[k+1]){
        tampung.push(arr[k])
      } 
    }
    return tampung
    }
    
    // TEST CASES
    
    console.log(cariModus([10, 4, 5, 2, 4])); // 4
    console.log(cariModus([5, 10, 10, 6, 5])); // 5
    console.log(cariModus([10, 3, 1, 2, 5])); // -1
    console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
    console.log(cariModus([7, 7, 7, 7, 7])); // -1
    