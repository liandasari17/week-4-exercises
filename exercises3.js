function cariMedian(arr) {
    var median= 0
    for(i=0; i<arr.length; i++){
      for(j=0; j<arr.length; j++){
        if(arr[j]> arr[j+1]){
          temp= arr[j]
          arr[j]= arr[j+1]
          arr[j+1]= temp
        }
      }
    }
    
        if (arr.length % 2 === 0) {
          median = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
      } else {
          median = arr[(arr.length - 1) / 2];
      }
   
      return median;
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5