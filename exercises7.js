function urutkanAbjad(str) {
    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    var tampung= ''
    for(i=0; i<kamus.length; i++){
      for(j=0; j<str.length; j++){
        if(kamus[i] === str[j]){
          tampung= tampung+ kamus[i]
        }
      }
    }
    return tampung
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'