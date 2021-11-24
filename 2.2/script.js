// function init() {
//   let nama = 'sandika';
//   let umur = 24;
//   function tampilNama() {
//     console.log(nama);
//     console.log(umur);
//   }
//   console.log(tampilNama());
// }
// init();

// bakal masuk ke function factory
// function init() {
//   let nama = 'sandika';
//   function tampilNama() {
//     console.log(nama);
//   }
//   return tampilNama;
// }
// let panggilNama = init(); // => ini hanya dijalankan sebagian, kalau mau full functionnya di simpan di variabel.
// panggilNama();

// lebih ringkas
// function init() {
//   // untuk menerima parameter yang dikirim oleh user
//   return function (nama) {
//     console.log(nama);
//   };
// }

// let panggilNama = init();
// panggilNama('pak');
// panggilNama('sandhika');

// factory function, function yang dibuat dengan function lain
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`halo ${nama} selamat ${waktu}, semoga hari mu indah`);
//   };
// }

// let waktuPagi = ucapkanSalam('pagi');
// let waktuSiang = ucapkanSalam('siang');
// let waktuMalam = ucapkanSalam('malam');

// waktuPagi('suyud');

// latihan 2
// ada cara agar tidak perlu membuat variabel untuk menyelesaikan sisa return function
// let add = (function () {
//   let conter = 0;
//   return function () {
//     return ++conter;
//   };
// })();

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

// function nama() {
//   return function (marga) {
//     console.log(`halo ${marga}`);
//   };
// }

// let namaKeluarga = nama();
// namaKeluarga('junaedi');

function siswa(nama) {
  return function (asal) {
    console.log(`halo nama saya ${nama}, saya berasal dari ${asal}`);
  };
}

let siswaSatu = siswa('budi');
siswaSatu('kampung durian runtuh');
