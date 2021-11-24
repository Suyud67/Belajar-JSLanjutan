// function expression
// const namaSiswa = function(nama){
//     return `halo ${nama}`;
// }

// console.log(namaSisaw('budi'));

// arrow function
// const namaSiswa = (nama) => {
//   return `hello ${nama}`;
// };
// console.log(namaSiswa('udin'));

// const namaSiswa = (nama, waktu) => {
//   return `hello ${nama}, selamat ${waktu}`;
// };
// console.log(namaSiswa('udin', 'siang'));

// const namaSiswa = (nama) => `hello ${nama}`;

// console.log(namaSiswa('udin'));

// let mahasiswa = ['suyud setiawan', 'rangga adiyasa', 'marcell budiputra'];

// let panjangNama = mahasiswa.map(function (nama) {
//   return nama.length;
// });

// let panjangNama = mahasiswa.map(nama => nama.length)

// obejct dalam arrow function
// let panjangNama = mahasiswa.map((nama) => ({ nama, panjangHuruf: nama.length }));

// console.table(panjangNama);

// konsep this pada arrow function

// const Mahasiswa = function () {
//   this.nama = 'suyud';
//   this.umur = 19;
//   this.sayHello = function () {
//     console.log(`hello nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//   };
// };

// const suyud = new Mahasiswa();

// arrow function
// const Mahasiswa = function () {
//   this.nama = 'suyud';
//   this.umur = 19;
//   this.sayHello = function () {
//     console.log(`hello nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//   };
// };

// const suyud = new Mahasiswa();

// object literal
// const mhs1 = {
//   nama: 'suyud',
//   umur: 19,
//   sayHello: function () {
//     console.log(`hello nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//   },
// };

// const Mahasiswa = function () {
//   this.nama = 'suyud';
//   this.umur = 19;
//   this.sayHello = function () {
//     console.log(`hello nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 1000);
// };

// const suyud = new Mahasiswa();

// penerapan arrow function dalam project asli

const box = document.querySelector('.box');

box.addEventListener('click', function () {
  let satu = 'size';
  let dua = 'caption';

  // dicek apa class size ada ? jika ada tukar posisi
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
