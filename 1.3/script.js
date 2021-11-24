// cara untuk membuat object pada javascript
// 1. object literal
//didalam obj diperlukan property dan method(function didalam obj)
// KELEMAHAN: JIKA DIHADAPKAN DENGAN OBJECT YANG BANYAK
// let mahasiswa = {
//   nama: 'suyud', // property
//   energi: 10,
//   makan: function (porsi) {
//     // method
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// 2. function declaration
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   },

//   main: function (main) {
//     this.energi -= main;
//     console.log(`halo ${this.nama}, selamat bermain`);
//   },

//   tidur: function (tidur) {
//     this.energi += tidur * 2;
//     console.log(`halo ${this.nama}, selamat tidur!`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   // dekelarasi
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let suyud = Mahasiswa('suyud', 10);

// prototype
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `halo ${this.nama}, selamat makan!`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `halo ${this.nama}, selamat bermain!`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `halo ${this.nama}, selamat tidur!`;
// };

// menampilkan ke consol
// const suyud = new Mahasiswa('suyud', 10);

// versi class
// class Mahasiswa {
//   constructor(nama, energi, tidur) {
//     this.nama = nama;
//     this.energi = energi;
//     this.tidur = tidur;
//   }
//   makan(porsi) {
//     this.energi += porsi;
//     return `halo ${this.nama}, selamat makan!`;
//   }

//   main(jam) {
//     this.energi -= jam;
//     return `halo ${this.nama}, selamat bermain!`;
//   }

//   tidur(jam) {
//     this.energi += jam * 2;
//     return `halo ${this.nama}, selamat tidur!`;
//   }
// }

// const suyud = new Mahasiswa('suyud', 10);

let angka = [1, 2, 3];
console.log(angka.reverse());

// 3. construction function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   };

//   this.main = function (main) {
//     this.energi -= main;
//     console.log(`halo ${this.nama}, selamat bermain`);
//   };
// }
// // untuk memanggil
// const suyud = new Mahasiswa('suyud', 10);
// const udin = new Mahasiswa('udin', 50);

// 4. object.creat()
