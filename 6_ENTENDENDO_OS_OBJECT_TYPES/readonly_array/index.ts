//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | Propriedades readonly |
//* o readOnlyArray é um tipo para arrays que deixa itens como
//* readonly, podemos aplicar um tipo para os itens do array, alem
//* desta propriedade especial, a modificação de itens pode ser feita
//* através de método,
//? mas não podemos aumentar o array, por exemplo
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

let myArray: ReadonlyArray<string> = ['Maça', 'Laranja', 'Banana']

// myArray[3] = 'Mamão' //! da erro

console.log(myArray)
// (3) ['Maça', 'Laranja', 'Banana']

myArray.forEach((item) => {
  console.log(`Fruta ${item}`)
})
// Fruta Maça
// Fruta Laranja
// Fruta Banana

myArray  = myArray.map((item) => {
  return `Fruta: ${item}`
})

console.log(myArray)
// (3) ['Fruta: Maça', 'Fruta: Laranja', 'Fruta: Banana']