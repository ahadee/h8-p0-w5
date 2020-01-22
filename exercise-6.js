function cariPelaku(str) {
    // you can only write your code here!
    let hurufYgDicari = 'abc'
    
    let count = 0
    for (let i = 0 ; i < str.length - hurufYgDicari.length + 1; i++) {
        let range = ''
        for (let j = i ; j < i + hurufYgDicari.length; j++) {
            range += str[j]
            if (hurufYgDicari === range) {
                count++
            }
        }
    }
    return count
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2