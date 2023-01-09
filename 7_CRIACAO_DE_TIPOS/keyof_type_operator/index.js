"use strict";
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          |  Keyof type operator |
//* com o keyof operator podemos criar um novo tipo
//* ele aceita dados do tipo objeto, como object literals e arrays
//* e pode criar o tipo baseado nas chaves do objeto passado com parâmetro
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// type Character = { name: string; age: number; hasDriveLicense: boolean }
// type C = keyof Character
// function showCharName(obj: Character, name: C): string {
//   return `${obj[name]}`
// }
// const myChar: Character = {
//   name: 'Lucas',
//   age: 30,
//   hasDriveLicense: true,
// }
// console.log(showCharName(myChar, 'name'))
// // Lucas
// console.log(showCharName(myChar, 'age'))
// // 30
// console.log(showCharName(myChar, 'hasDriveLicense'))
// // true
