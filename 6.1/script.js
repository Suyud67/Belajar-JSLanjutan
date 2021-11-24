// Destructuring Assignment dalam Array
// array
// const coba = ['satu', 'dua', 'tiga'];

// const [a, b, c] = coba;
// untuk skip elemen dalam array kosongin saat deklarasi destructuring tapi koma element yang dilompati tidak dihilangkan
// const [a, , c] = coba;

// console.log(a);
// console.log(b);
// console.log(c);

// swap element
// let a = 1;
// let b = 2;
// console.log(a, b);
// [a, b] = [b, a];
// console.log(a, b);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a, b);

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(a);
// console.log(values);

// destructuring object
// const mhs = {
//   nama: 'suyud setiawan',
//   nim: '20101008',
// };

// const { nama, nim } = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({ nama, nim } = { nama: 'suyud setiawan', nim: '20101008' });
// console.log(nama);

// assignment nama baru(jika nama propertynya terlalu panjang)
// const mhs = {
//   nama: 'suyud setiawan',
//   nim: '20101008',
// };

// const { nama: nm, nim: n } = mhs;
// console.log(nm);

// default value
// const mhs = {
//   nama: 'suyud setiawan',
//   nim: '20101008',
//   email: 'suyudsetiawan@gmail.com',
// };

// const { nama, nim, email = 'email@default.com' } = mhs;
// console.log(email);

// memberikan nilai default + assignment ke variabel baru
// const mhs = {
//   nama: 'suyud setiawan',
//   nim: '20101008',
//   email: 'suyudsetiawan@gmail.com',
// };

// const { nama: n, nim: nm, email: e = 'email@default.com' } = mhs;
// console.log(e);

// rest parameter
// const mhs = {
//   nama: 'suyud setiawan',
//   nim: '20101008',
//   email: 'suyudsetiawan@gmail.com',
// };

// const { nama, ...value } = mhs;
// console.log(value);

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: 'suyud setiawan',
  nim: '20101008',
  email: 'suyudsetiawan@gmail.com',
};

function getMhsId({ nama, nim }) {
  return nim;
}

console.log(getMhsId(mhs));
