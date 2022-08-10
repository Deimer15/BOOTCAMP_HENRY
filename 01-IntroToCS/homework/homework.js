'use strict'

function BinarioADecimal(num) {
    // tu codigo aca
    let sum = 0,
        index = 0;
    for (let i = num.length - 1; i >= 0; i--) {
        sum += 2 ** index * parseInt(num[i], 10);
        //sum += Math.pow(2, index) * parseInt(num[i], 10);
        index++;
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

console.log("Paquete nodemo"); //Permite correr codigo java script en nuestra consola


module.exports = {
    BinarioADecimal,
    DecimalABinario,
}