'use strict'

function BinarioADecimal(num) {
    // tu codigo aca
    let sum = 0,
        index = 0,
        sum2 = 1;
    for (let i = num.length - 1; i >= 0; i--) {
        /*if (index === 0) {
            sum2 = 1;
        } else {
            for (let j = 1; j <= index; j++) {
                sum2 *= 2;
            }
        }*/
        //sum += sum2 * parseInt(num[i], 10);
        sum += 2 ** index * parseInt(num[i], 10);
        //sum += Math.pow(2, index) * parseInt(num[i], 10);
        index++;
        sum2 = 1;
    }
    return sum;
}

function DecimalABinario(num) {
    // tu codigo aca
    let arr = [];
    do {
        arr.unshift(Math.floor(num % 2));
        num = num / 2;
    } while (num >= 1);
    return arr.join('');
}


module.exports = {
    BinarioADecimal,
    DecimalABinario,
}