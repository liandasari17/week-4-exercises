function ubahHuruf(kata) {
    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    var tampung= ''
    for(i=0; i<kata.length; i++){
      for(j=0; j<kamus.length; j++){
        if(kata[i] === kamus[j]){
          tampung= tampung + kamus[j+1]
        } else 
          if(kata[i] === 'z') {
            tampung= tampung + 'a'
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