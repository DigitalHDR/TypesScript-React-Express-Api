"use strict";
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              | Parâmetro default |
//* os parâmetros default são os que ja possuem um valor definido
//* se não passarmos para a função, é utilizado esse valor
//* para este recurso, a aplicação em ts é igual js
//? precisa estar sempre por ultimo na lista de argumentos
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function somaDefault(n, m = 5) {
    return n + m;
}
console.log(somaDefault(2));
//! 12
console.log(somaDefault(2, 5));
//! 7
//? o segundo valor fica como default se vc colocar sera ele, se nao ficara
//? oque está no parmetro
