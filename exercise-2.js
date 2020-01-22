function changeVocals(str) {
    //code di sini
    var arrStr = str.split('');
    var alfabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var hurufVokal = 'aiueoAIUEO';
    var indeks;
    var hasil = [];

    for (let i = 0; i < arrStr.length; i++) {
        for (let j = 0; j < hurufVokal.length; j++) {
            if (arrStr[i] === hurufVokal[j]) {
                indeks = alfabet.indexOf(arrStr[i]) + 1;
                arrStr[i] = alfabet[indeks];
            }
        }
        hasil.push(arrStr[i]);
    }
    let result = ''
    for (let i = 0; i < hasil.length; i++) {
        result += hasil[i]
    }

    return result;
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
    let result = ''
    let hurufKecil = 'abcdefghijklmnopqrstuvwxyz'
    let hurufBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (i = 0; i < str.length; i++) {
        let flag = false
        for (j = 0; j < hurufKecil.length; j++) {
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
        if (!flag) {
            result += str[i]
        }
    }
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
    let lowUpCase = setLowerUpperCase(wordReverse)
    let noSpace = removeSpaces(lowUpCase)

    return noSpace
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'