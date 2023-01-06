//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | Revisão de Generics |
//* utilizamos generics quando uma função pode aceitar mais de um tipo
//* é uma prática mais interessante do que o any, que teria um efeito
//* semelhante, porem generics
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// function showData<T>(arg: T): string {
//     return `O dado é ${arg}`
// }

// console.log(showData(5))
// ///! O dado é 5

// console.log(showData('testando generic'))
// //! O dado é testando generic

// console.log(showData(true))
// //! true