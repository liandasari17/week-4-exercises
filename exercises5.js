function ubahHuruf(kata) {
  var kamus = 'abcdefghijklmnopqrstuvwxyza'
  var tampung= ''
  for(var i=0; i<kata.length; i++){
    for(var j=0; j<kamus.length; j++){
      if(kata[i] === kamus[j]){
        tampung= tampung + kamus[j+1]
        break;
      } 
    }
  }
  return tampung
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu