//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          |  Intersection types |
//* Intersection types são utilizados para criar tipo mais
//* complexos a partir de duas interfaces, por exemplo
//* podemos concatenar os tipo com '&'

//? união entre duas interface
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

interface Character {
  name: string
}

interface Gum {
  type: string
  caliber: number
}

type HumanWinthGum = Character & Gum

const arnold: HumanWinthGum = {
  name: 'Arnold',
  type: 'Shotgun',
  caliber: 12,
}

console.log(arnold)
//! {name: 'Arnold', type: 'Shotgun', caliber: 12}

console.log(arnold.caliber)
