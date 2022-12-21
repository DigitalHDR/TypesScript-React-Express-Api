//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*        | introdução AS interfaces |
//* uma outra maneira de nomear um tipo de objeto
//* podemos determinar um nome para o tipo
//* e também escolher quais as propriedades e seus tipos
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

interface Point {
  x: number
  y: number
  z: number
}
// parecido com um objeto javascript

function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj: Point = {
  x: 10,
  y: 15,
  z: 20,
}

showCoords(coordObj)
//! X: 10 Y: 15 Z: 20