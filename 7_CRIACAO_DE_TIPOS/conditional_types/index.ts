//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | Generics com Interface |
//* o tipo por condição permite criar um novo tipo com base em
//* um if/else, mas não sao aceitas expressoes tao amplas
//* utilizamos a sintaxe do 'if ternario'
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

interface A {}

interface B extends A {}

interface Teste {
  showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 5

// const someVar2:myType = 'teste' //! erro, pois 'B' é 'extends' de 'A'

type myTypeB = Teste extends { showNumber(): number } ? string : boolean
