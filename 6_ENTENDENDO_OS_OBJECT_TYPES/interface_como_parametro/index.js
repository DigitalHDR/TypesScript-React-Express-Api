"use strict";
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | Interface como parâmetro |
//* um caso de uso para interfaces é simplificar os parametros de objeto
//* de função
//* ou seja em vez de passar parametros de um objeto longo para n função
//* passamos apenas a interface
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R${product.prince}`);
    if (product.isAvailable) {
        console.log(`O produto está disponível`);
    }
}
const shirt = {
    name: 'Camisa',
    prince: 29.79,
    isAvailable: true
};
showProductDetails(shirt);
//! O nome do produto é Camisa e seu preço é R29.79
//! index.js:12 O produto está disponível
//todo ==========OUTRA MANEIRA===========================
showProductDetails({ name: 'Tênis', prince: 123.34, isAvailable: true });
//! O nome do produto é Tênis e seu preço é R123.34
//! index.js:12 O produto está disponível
