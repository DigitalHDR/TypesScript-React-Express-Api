"use strict";
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | Herança de interfaces |
//* utilizamos extending(extends) types como uma herença para
//* criar tipos mais complexos por meio de uma interface
//* ou seja, uma interface pode herdar as propriedades e tipo já
//* definidos de outra
//* isso acontece por meio da instrução extends
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const lucas = {
    name: 'Lucas',
    age: 30,
};
console.log(lucas);
//! {name: 'Lucas', age: 30}
//todo =====================================================
const goku = {
    name: 'Goku',
    age: 50,
    superpower: ['Kamehameha', 'Genki Dama']
};
console.log(goku);
//! {name: 'Goku', age: 50, superpower: Array(2)}
//! superpower: (2) ['Kamehameha', 'Genki Dama']
console.log(goku.superpower[0]);
//! Kamehameha
