"use strict";
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Bigint |
//* com o tipo bigint podemos declarar números com valores muito altos
//* podemos utilizar a notação literal, exemplo: 100n
//* para este recurso precisamos mudar a configuração do TS, para versão
//* mínima de ES2020
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let n;
// n = 1 //! da erro pois não satisfaz o bigint
n = 1000n;
//! tem que mudar a config do TS para ES2020, pois só ele(eu acho) funciona Bigint 
console.log(n);
//!1000n
console.log(typeof n);
//! bigint
console.log(n + 100n);
//! 1100n
