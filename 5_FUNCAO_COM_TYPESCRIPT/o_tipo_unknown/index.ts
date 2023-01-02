//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              | O tipo unknown |
//* o tipo unknown é utilizado de forma semelhante ao any, ele aceita
//* qualquer tipo de dado
//* porem a diferença é que ele não deixa algo ser executado se não houver
//* validação de tipo, ou seja adiciona um trava de segurança
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// function doSomething(x: unknown) {
//     console.log(x)
// }

// doSomething('1')
// //! 1

//todo =====================================================
// function doSomething(x: unknown) {
//   if (Array.isArray(x)) {
//     console.log(x[0])
//   } else if (typeof x === 'number') {
//     console.log('x é um numero')
//   }
// }

// doSomething([1, 2, 3, 4, 5, 6, 7, 8, 9])
// //! 1


// doSomething(5)
// //! x é um numero