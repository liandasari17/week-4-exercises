function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];

  if(arrPenumpang === 0){
    return arrPenumpang
  }
  var jaraq = []
  for(var i=0; i<arrPenumpang.length; i++){
    //console.log(arrPenumpang[i])
    for(var j=0; j<rute.length; j++){
      //console.log([j])
      if(arrPenumpang[i][1] === rute[j]){
        var axal = j
      } else
      if((arrPenumpang[i][2]) === (rute[j])){
        var tojoean = j
      }
    }
    jaraq.push(Math.abs(tojoean-axal))
    //console.log(jaraq)
  }

  //var harga= 2000
  var arrTamp = []
  for(var i=0; i<arrPenumpang.length; i++){
    //console.log(arrPenumpang[i])
    var objPenumpang ={}
    objPenumpang.penumpang = arrPenumpang[i][0]
    objPenumpang.naikDari = arrPenumpang[i][1]
    objPenumpang.tujuan = arrPenumpang[i][2]
    objPenumpang.bayar = jaraq[i] * 2000
    arrTamp.push(objPenumpang)
  }

  return arrTamp
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]