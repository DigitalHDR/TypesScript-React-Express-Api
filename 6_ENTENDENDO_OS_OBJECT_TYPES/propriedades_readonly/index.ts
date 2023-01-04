//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | Propriedades readonly |
//* as propriedades readonly podem ser alteradas apenas uma vez, na
//* criação do novo dado
//* é uma forma de criar um valor constante em um objeto
//* podemos adicionar as interfaces
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

interface Car {
  brand: string
  readonly wheels: number
}

const fusca: Car = {
  brand: 'VW',
  wheels: 4,
}

console.log(fusca)