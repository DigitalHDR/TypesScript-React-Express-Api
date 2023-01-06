//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | Generics com Interface |
//* com interfaces podemos criar tipos complexos para objetos
//* adicionando Generics podemos deixá-los mais brandos
//* aceitando tipos diferentes em ocasiões diferentes
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// interface MyObjetc<T, U, Q> {
//   name: string
//   wheels: T
//   engine: U
//   color: Q
// }

// type Car = MyObjetc<number, number, string>
// type Pen = MyObjetc<boolean, boolean, string>

// const myCar: Car = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco' }
// const myPen: Pen = {
//   name: 'Caneta BIC',
//   wheels: false,
//   engine: false,
//   color: 'azul',
// }

// console.log(myCar)
// //! {name: 'Fusca', wheels: 4, engine: 1, color: 'Branco'}

// console.log(myPen)
// //! {name: 'Caneta BIC', wheels: false, engine: false, color: 'azul'}
