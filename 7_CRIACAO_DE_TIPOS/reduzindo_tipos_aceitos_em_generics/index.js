"use strict";
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*      | Reduzindo tipos aceitos em Generics |
//* as constraints nos ajudam a limitar os tipos aceitos
//* como em generic podemos ter tipo livres, eles vão filtrar
//* os tipos aceitos, adicionando organização quando queremos
//* aproveitar a liberdadde dos generics
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: 'Porta', cor: 'Branca' };
const otherProduct = { name: 'Carro', wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: 'Roupa' };
console.log(showProductName(myObj));
//! O nome do produto é: Porta
console.log(showProductName(otherProduct));
//! O nome do produto é: Carro
// console.log(showProductName(thirdObj)) //! da erro, falta propriedade 'name'
