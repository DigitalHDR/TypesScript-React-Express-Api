"use strict";
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*            | TypeAlias  VS interface |
//* na maioria das vezes podemos optar entre qualquer um dos recursos
//* sem problemas
//? a unica diferença é que a interface poder ser alterada ao
//? longo do código, ja o alias não
//* ou seja se pretendemos mudar como o tipo se conforma,
//* devemos escolher a interface
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const somePerson = {
    name: 'lucas',
    age: 34
};
console.log(somePerson);
// type personType = {
// age: number
// }
//! da erro,pois type é como const só pode ter um
//? ja interface não, seria como let ou var
