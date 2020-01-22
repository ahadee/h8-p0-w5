function sorting(arrNumber) {
    // code di sini
    temp = ''
    for (let i = 0; i < arrNumber.length; i++) {
        for (let j = i + 1; j < arrNumber.length; j++) {
            if (arrNumber[i] > arrNumber[j]) {
                temp = arrNumber[i]
                arrNumber[i] = arrNumber[j]
                arrNumber[j] = temp
            }
        }
    }
    return arrNumber
}

function getTotal(arrNumber) {
    // code di sini
    let arr = []
    let flag = false
    for (let i = 0; i < arrNumber.length; i++) {
        flag = false
        for (let j = 0; j < arr.length; j++) {
            if (arrNumber[i] === arr[j][0]) {
                flag = true
            }
        }
        if (!flag) {
            arr.push([arrNumber[i], 0])
        }
    }
    // console.log(arr)
    for (let i = 0; i < arrNumber.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arrNumber[i] === arr[j][0]) {
                arr[j][1]++
            }
        }
    }
    return 'angka paling besar adalah ' + arr[arr.length - 1][0] + ' dan jumlah kemunculan sebanyak ' + arr[arr.length - 1][1]
}

let arrx = [2, 8, 4, 6, 8, 5, 8, 4]

function mostFrequentLargestNumbers(arrNumber) {
    if (arrNumber.length === 0) {
        return "''"
    }
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//   //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//   //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
  //''