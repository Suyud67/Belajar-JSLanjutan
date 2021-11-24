// html fragments

// const mhs = {
//   nama: 'suyud',
//   nim: '20101008',
// };

// let el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;

// looping
// const mhs = [
//   {
//     nama: 'suyud setiawan',
//     nim: '20101008',
//   },
//   {
//     nama: 'udin saleh',
//     nim: '4893428947',
//   },
//   {
//     nama: 'mie del goreng',
//     nim: '34194983',
//   },
// ];

// const el = `<div class="mhs">
//     ${mhs
//       .map(
//         (m) => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.nim}</li>
//     </ul>`
//       )
//       .join('')}
// </div>`;

// conditional
// ternary
// const lagu = {
//   judul: 'Kau Adalah',
//   artis: 'Isyana Sarasvati',
//   feat: 'Rayi Putra',
// };

// const el = `<div class="lagu">
// <ul>
//     <li>${lagu.artis}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ``} </li>
// </ul>
// </div>`;

// Nested
// html fragment bersarang

const mhs = {
  nama: 'suyud setiawan',
  nim: '20101008',
  matakuliah: ['Web Dasar', 'Framework Website', 'Siber Security', 'BackEnd Develepor', 'Bahasa Indonesia'],
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
    <h4>Mata Kuliah</h4>
    <ul>
        ${mhs.matakuliah.map((matkul) => `<li>${matkul}</li>`).join('')}
    </ul>
</div>`;

document.body.innerHTML = el;
