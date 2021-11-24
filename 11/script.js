// promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah eventyang asyncronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states(fulfilled / rejected / panding) dalam JS
// fungsi callback untuk menjalankan states
// callback (resolve / reject / finally)
// aksi yang dijalankan apabila tepenuhi atau tidak
// aksi (then / catch)

// contoh 1
// let keadaan = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (keadaan) {
//     resolve('janji ditepati');
//   } else {
//     reject('janji diingkari');
//   }
// });

// janji1.then((response) => console.log(`OK: ${response}`)).catch((response) => console.log(`NOT OK: ${response}`));

// response isinya dari parameter yang dikirim dari resolve()

// contoh 2
// let keadaan = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (keadaan) {
//     setTimeout(() => {
//       resolve('Ditepati setelah beberapa waktu');
//     }, 3000);
//   } else {
//     setTimeout(() => {
//       reject('Tidak Ditepati setelah beberapa waktu');
//     }, 3000);
//   }
// });

// console.log('mulai');
// // console.log(janji2.finally(() => console.log('waktu tunggu selesai')));
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log('waktu tunggu selesai'))
//   .then((response) => console.log(`OK: ${response}`))
//   .catch((response) => console.log(`NOT OK: ${response}`));
// console.log('selesai');

// finally dijalankan ketika salah satu antara then atau catch siap dijalankan

// contoh 3
// Promise.all([obj1, obj2])
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: 'Avenger',
        sutradara: 'udin kodir',
        tahun: 2012,
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        daerah: 'Gianyar',
        suhu: 24,
        kondisi: 'cerah berawan',
      },
    ]);
  }, 1000);
});

Promise.all([film, cuaca]).then((response) => {
  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
});
