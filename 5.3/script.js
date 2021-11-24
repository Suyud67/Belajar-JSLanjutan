// tagged tamplate
const nama = 'suyud setiawan';
const umur = 19;

// rest parameter, menyimpan ekspresion dalam var str dan disimpan dalam bentuk array
function funcCoba(simpanStr, ...valueStr) {
  //   let result = '';
  //   simpanStr.forEach((simpStr, i) => {
  //     result += `${simpStr}${valueStr[i] || ''}`;
  //   });
  //   return result;

  return simpanStr.reduce((result, simpStr, i) => `${result}${simpStr}${valueStr[i] || ''}`, '');
}

let str = funcCoba`hao lnama saya ${nama}, umur saya ${umur} tahun.`;

console.log(str);
