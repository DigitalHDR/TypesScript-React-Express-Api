//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*            | literal types |
//* literal types é um recurso que permite colocar valores como tipo
//* isso restringe o uso a não só tipos, como também os próprios valores
//* este recurso é muito utilizado com union types
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// let teste: 'testando'

// teste = 'testando' //? não aceita outro valor a nao ser 'testando'

// function showDirection(direction: 'left' | 'right' | 'center') {
//     console.log(`a direção é: ${direction}`)
// }

// showDirection('left')
// //? a função só aceita 3 valores 
// //? left, right, center