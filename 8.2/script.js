// Rest Parameter

// function myFunc() {
//   return myArg;
//   return arguments;
//   cara mengubah ke array
//   return Array.from(arguments);
//   return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   let jumlah = 0;
//   for (const a of angka) {
//     jumlah += a;
//   }
//   return jumlah;

//   return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ['udin', 'cahyo', 'budi', 'tristan'];

// const [ketua, wakil, ...anggota] = kelompok1;

// console.log(ketua);

// oject destructuring
// const kelompok = {
//   ketua: 'yuri',
//   wakil: 'cahya',
//   anggota1: 'yudi',
//   anggota2: 'yoga',
//   anggota3: 'husni',
// };

// const { ketua, wakil, ...anggota } = kelompok;

// console.log(anggota);

// filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy('boolean', 1, 3, false, 'suyud', 2, 'pijar', true));
