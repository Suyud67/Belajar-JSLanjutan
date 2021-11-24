// function Hitung(angka, aksi) {
//   for (let i = 0; i < angka; i++) {
//     aksi(i);
//   }
// }

// Hitung(10, console.log);
// Hitung(9, alert);

// contoh
function Ujian(matakuliah, waktuPengerjaan) {
  console.log(`selamat menegrjakan ${matakuliah}...`);
  waktuPengerjaan();
}

function waktuPengerjaan() {
  alert('waktu pengerjaan ujian selesai!');
}

Ujian('matematika', waktuPengerjaan);
