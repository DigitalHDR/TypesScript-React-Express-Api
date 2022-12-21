//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*        | introdução AS interfaces |
//* uma outra maneira de nomear um tipo de objeto
//* podemos determinar um nome para o tipo
//* e também escolher quais as propriedades e seus tipos
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// parecido com um objeto javascript
function showCoords(obj) {
    console.log("X: ".concat(obj.x, " Y: ").concat(obj.y, " Z: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
