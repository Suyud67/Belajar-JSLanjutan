// tempalate Literal / tamplate string
// const nama = 'suyud';
// let umur = 19;

// console.log(`halo nama saya ${nama} dan umur saya ${umur} tahun`);

// embedded expresion
// operasi ternari dalam tamplate literal
// const x = 10;

// console.log(`${x % 2 == 0 ? 'genap' : 'ganjil'}`);

// html fragments
const mhs = {
  nama: 'suyud setiawan',
  umur: 19,
  nim: '20101008',
  email: 'suyudsetiawan@gmail.com',
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
</div>`;

console.log(el);
