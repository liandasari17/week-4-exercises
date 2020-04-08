function fpb(angka1, angka2) {
    var R;
    while ((angka1 % angka2) > 0)  {
      R = angka1 % angka2;
      angka1 = angka2;
      angka2 = R;
    }
    return angka2;
  }
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1