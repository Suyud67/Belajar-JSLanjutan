// Callback
// syncronous Callback
// function halo(nama) {
//   console.log(`halo, ${nama}`);
// }

// function tampilkanNama(tampil) {
//   const nama = prompt(`masukan nama: `);
//   tampil(nama);
// }

// tampilkanNama(halo);

// Asyncronous callback
// ajax with vanilla js (full js)
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     //cek state status 4 (ready)
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         // cek status web atau data 200 (ada / ready)
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         // cek ketika web atau data tidak ada / ready (404)
//         error(xhr.responseText);
//       }
//     }
//   };

//   xhr.open('get', url);
//   xhr.send();
// }

// getDataMahasiswa(
//   'data/mahasiswa.json',
//   (result) => {
//     const mhs = JSON.parse(result);
//     mhs.forEach((m) => {
//       console.log(m.nama);
//     });
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// Asyncronous menggunakan jquery
console.log('mulai');
$.ajax({
  url: 'data/mahasiswa.json',
  success: function (mhs) {
    let desc = '';
    mhs.forEach((m) => {
      desc += ` <ul>
                  <li>${m.nama}</li>
                  <li>${m.nim}</li>
                  <li>${m.email}</li>
                  <li>${m.jurusan}</li>
                </ul>`;
    });
    $('.container-view').html(desc);
  },
  error: (error) => console.log(error.responseText),
});

console.log('selesi');
