function changeVocals(str) {
    //code di sini
    let result = ''
    let vocalKecil = 'abijuvefop'
    let vocalBesar = 'ABIJUVEFOP'
    let hurufKecil = 'bcdfghjklmnpqrstvwxyz'
    let hurufBesar = 'BCDFGHJKLMNPQRSTVWXYZ'

    for (i=0; i<str.length; i++) {
        let flag = false
            for (j= 0; j < hurufKecil.length; j++) {
                if (str[i] === hurufKecil[j]) {
                    result += hurufBesar[j]
                    flag = true
                    break
                }
                if (str[i] === hurufBesar[j]) {
                    result += hurufKecil[j]
                    flag = true
                    break
                }
            }
            for (let k = 0 ; k < vocalKecil.length; k++) {
                if (str[i] === vocalKecil[k]) {
                    result += vocalBesar[k+1]
                    flag = true
                    break
                }
                if (str[i] === vocalBesar[k]) {
                    result += vocalKecil[k+1]
                    flag = true
                    break
                }
            }
            if (!flag) {
                result += str[i]
            }
    }
    return result
}

function reverseWord(str) {
    //code di sini
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }

    return result
}

function setLowerUpperCase(str) {
    //code di sini
    let result = str.toLowerCase()

    return result
}

function removeSpaces(str) {
    //code di sini
    let result = ['']
    let j = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result.push('')
            j++
        }
        else {
            result[j] += str[i]
        }
    }
    let temp = ''
    for (let i = 0; i < result.length; i++) {
        temp += result[i]
    }
    return temp
}

function passwordGenerator(name) {
    //code di sini

    if (name.length <= 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

    let modifyVocal = changeVocals(name)
    let wordReverse = reverseWord(modifyVocal)
    let noSpace = removeSpaces(wordReverse)

    return noSpace
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator('iputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
// console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'