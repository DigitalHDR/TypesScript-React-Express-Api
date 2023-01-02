//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              |  Rest operator com TS |
//* em javascript es6 podemos utilizar o REST OPERATOR
//* para aplicá-lo em parametros em ts é facil, basta definir o tipo
//* de dado com a sintaxe de REST(...)
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
//! 15

//apena explicação do reduce

// number é o numero atual = 1
// (sum=2) + (number que é =1) vai dar 3

// agora numero atual é 3, que passa a ser (sum=3)
// (sum=3) + (number que é =3) vai dar 6

// agora numero atual é 6, que passa a ser (sum=6)
// (sum=6) + (number que é =4) vai dar 10

// agora numero atual é 10, que passa a ser (sum=10)
// (sum=10) + (number que é =5) vai dar 15