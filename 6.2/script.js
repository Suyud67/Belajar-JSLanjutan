// destructuring
// array
// function penjumlahanKali(a, b) {
//   return [a + b, a * b];
// }

// const [jumlah, kali] = penjumlahanKali(3, 2);
// console.log(jumlah);
// console.log(kali);

// object
// function kalkulasi(a, b) {
//   return {
//     jumlah: a + b,
//     pengurangan: a - b,
//     pembagian: a / b,
//     pengalian: a * b,
//   };
// }

// const { pengurangan, pembagian, jumlah = 'tidak ada', pengalian } = kalkulasi(4, 2);

// console.log(pengurangan);

// Destructuring Function Argument
// const mhs1 = {
//   nama: 'suyud setiawan',
//   umur: 19,
//   email: 'suyudsetiawan@gmail.com',
//   nilai: {
//     tugas: 80,
//     uas: 87,
//     uts: 80,
//   },
// };

// function nmMahasiswa(mhs) {
//   return `halo nama saya ${mhs.nama}, umur saya ${mhs.umur} tahun`;
// }

// function nmMahasiswa({ nama, umur }) {
//   return `halo nama saya ${nama}, umur saya ${umur} tahun`;
// }

// function nmMahasiswa({ nama, umur, nilai: { tugas, uas, uts } }) {
//   return `halo nama saya ${nama}, umur saya ${umur} tahun. nilai uas saya ${uas}`;
// }

// console.log(nmMahasiswa(mhs1));

const tokoHp = {
  nama: 'iphone X',
  harga: 12000000,
  quantity: {
    toko: 120,
    gudang: 300,
  },
};

function cekToko({ nama, harga, quantity: { toko, gudang } }) {
  return `nama produk kami ${nama} dengan harga ${harga}. stok tersedia sekarang ialah: ${toko}.`;
}

console.log(cekToko(tokoHp));
