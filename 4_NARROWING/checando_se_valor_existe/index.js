"use strict";
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              | Checando se valor existe |
//* em javascript podemos colocar uma variavel em um if, e se
//* houver algum valor recebemos um true
//* quando não há valor um false
//* desta maneira conseguimos realizar o narrowing tambem
//* , é uma outra estratégia bem utilizada
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === 'multiply') {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log('Por favor, defina uma operação');
    }
}
operations([1, 2, 3]);
//!Por favor, defina uma operação
operations([1, 2, 3], 'sum');
//! 6
operations([2, 4, 8], 'multiply');
//! 64
