// function Hitung(angka, aksi) {
//   for (let i = 0; i < angka; i++) {
//     aksi(i);
//   }
// }

// Hitung(10, console.log);
// Hitung(9, alert);

// contoh
// function Ujian(matakuliah, waktuPengerjaan) {
//   console.log(`selamat menegrjakan ${matakuliah}...`);
//   waktuPengerjaan();
// }

// function waktuPengerjaan() {
//   alert('waktu pengerjaan ujian selesai!');
// }

// Ujian('matematika', waktuPengerjaan);

// Filter, Map, Reduce
const angka = [-1, 9, 8, 5, 2, 1, 3, -2, 4, 6];

// menampilkan angka >= 3
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// filter
// const newAngka = angka.filter((a) => a >= 3); //a itu memepresentasikan element dalam array angka
// console.log(newAngka);

// map
// mengalikan 2 setiap array angka
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// reduce
// menambahkan seluruh isi array
// -1 + 9 + 8 + 5 + 2 + 1 + 3 + -2 + 4 + 6
// yang terjadi sebenarnya
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5); //nilai awal (5) kalau tidak diisi aka default nilainya ialah 5
// console.log(newAngka);

// metod chaining
// mancari angka > 5
// dikalikan 4
// dijumlahkan
const hasil = angka
  .filter((a) => a > 5) //9,8,6
  .map((a) => a * 4) // 36, 32, 24
  .reduce((acc, currV) => acc + currV); // 92
console.log(hasil);
