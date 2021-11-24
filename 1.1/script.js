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
//
// function Mahasiswa(nama, energi) {
//   // dekelarasi
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   };

//   mahasiswa.main = function (main) {
//     this.energi -= main;
//     console.log(`halo ${this.nama}, selamat bermain`);
//   };

//   return mahasiswa;
// }

// let suyud = Mahasiswa('suyud', 10);

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
