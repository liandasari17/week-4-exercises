function angkaPrima(angka) {
  for(i=2; i<angka; i++){
    var check = true
    if(angka % i === 0){
      check = false
      break;
    }
  }
  return check
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false