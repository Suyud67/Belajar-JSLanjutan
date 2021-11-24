console.log('satu');
setTimeout(function waktuHabis() {
  console.log('dua');
}, 5000);
console.log('tiga');

// penjelasan eksekusi asyncronous

// pertama eksekusi log('satu'), dan hilang dari stack.
// setTimeout dieksekusi, masuk ke Web API.
// eksekusi log('tiga'), dan hilang dari stack.
// setelah 5 detik maka setTimeout masuk ke Queue, dicek apakah di stack sudah tidak ada di eksekusi.
// kalau tidak ada setTimeout masuk ke stack dan eksekusi log('dua')
// log('dua') dan setTimeout() hilang dari stack;
