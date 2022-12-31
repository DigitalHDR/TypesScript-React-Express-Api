//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              | Constraint em generic function |
//* as generic functions podem ter seu escopo reduzido por contraints
//* basicamente limitamos os tipos que podem ser utilizados no generic
//* isso faz com que nosso escopo seja menos abrangente
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T
  // : T >>> teve que colocar isso, pois em 'return biggest' estava
  // dando erro que fala, que return tem que ser string e number e não T

  if (+a > +b) {
    biggest = a
  } else {
    biggest = b
  }

  return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber('lucas', 'fernando'))
// console.log(biggestNumber(1, 'sdf')) da erro, nao aceita 2 valor diferentes

//extends >>> é como herança
