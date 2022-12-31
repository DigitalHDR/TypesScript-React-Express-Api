//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              | Generic function |
//* é uma estratégia para quando o tipo de retorno é relacionado ao tipo
//* do argumento, por exemplo: um item de array, pode ser string, boolean
//* ou number, normalmente são utilizadas letras como T ou U para definir
//* os generics é uma convenção
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// function firstElement<T>(arr: T[]): T {
//   return arr[0]
// }

// console.log(firstElement([1, 2, 3]))
// console.log(firstElement(['a', 'b', 'c']))

// //todo =====================================================

// function mergeObjects<U, T>(obj1: U, obj2: T) {
//   return {
//     ...obj1,
//     ...obj2,
//   }
// }

// const newObject = mergeObjects(
//   { name: 'Lucas' },
//   { idade: 30, job: 'programador' }
// )

// console.log(newObject)
// // {name: 'Lucas', idade: 30, job: 'programador'}