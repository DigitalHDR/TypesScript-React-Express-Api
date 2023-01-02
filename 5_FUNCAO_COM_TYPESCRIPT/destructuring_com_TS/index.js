"use strict";
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              | Destructuring com TS |
//* o destructuring, outro recurso de es6, também pode ser aplicado com TS
//* precisamos apenas determinar o tipo de cada dado que será desestruturado
//* desta maneira o ts valida o destructuring
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price.toFixed(2)}`;
}
const shirt = { name: 'Camisa', price: 49.90 };
console.log(showProductDetails(shirt));
//! O nome do produto é Camisa e ele custa R$49.90
