//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | Index Signature |
//* utilizamos o index signature quando não sabemos o nome das chaves
//* mas já sabemos quais os tipos de um objeto ou array
//* isso restringe a tipo que não devem ser utilizados
//* uma barreira de segurança a mais na nossa variavel
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

interface CoordObeject {
  [index: string]: number
}

let coords: CoordObeject = {
  x: 10,
}

coords.y = 15

console.log(coords)