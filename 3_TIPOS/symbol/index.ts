//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | symbol |
//* de forma resumida, o symbol cria uma referência única para 
//* um valor, ou seja, mesmo que ele possua o mesmo
//* valor de outra varivel´teremos valores sendo
//* considerados difirentes
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

let symbolA: symbol = Symbol('a')
let symbolB = Symbol('a')

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)
// false
// false