//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*            | TypeAlias  VS interface |
//* na maioria das vezes podemos optar entre qualquer um dos recursos
//* sem problemas
//? a unica diferença é que a interface poder ser alterada ao
//? longo do código, ja o alias não
//* ou seja se pretendemos mudar como o tipo se conforma,
//* devemos escolher a interface
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// interface Person {
//     name: string
// }

// interface Person {
//     age: number
// }

// const somePerson: Person = {
//     name: 'lucas',
//     age: 34
// }

// console.log(somePerson)
//! {name: 'lucas', age: 34}

//todo =====================================================


// type personType = {
//     name: string
// }

// type personType = {
    // age: number
// }
//! da erro,pois type é como const só pode ter um
//? ja interface não, seria como let ou var
