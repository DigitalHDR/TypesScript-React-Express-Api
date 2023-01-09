//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | Typeof type operator |
//* com o typeof type operator podemos criar um novo tipo
//* este tipo é será baseado no tipo de algum dado
//* ou seja é interessante para quando queremos criar uma variavel
//* com o mesmo tipo da outra
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const userName: string = 'lucas'

const userName2: typeof userName = 'adima'

console.log(userName2)
//! adima

//todo =====================================================

type x = typeof userName

const userName3: x = 'pabline'

console.log(userName3)
//! pabline