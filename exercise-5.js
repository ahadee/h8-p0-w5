function hapusSimbol(str) {
    // you can only write your code here!
    let huruf = 'abcdefghijklmnopqrstuvwxyz'
    let angka = '1234567890'
    let result = ''
    for (let i = 0; i < str.length; i++) {
        for (let j = 0 ; j < huruf.length; j++) {
            if (str[i] === huruf[j]) {
                result += str[i]
            }
        }
        for (let k = 0 ; k < angka.length; k++) {
            if (str[i] === angka[k]) {
                result += str[i]
            }
        }
    }

    return result
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100