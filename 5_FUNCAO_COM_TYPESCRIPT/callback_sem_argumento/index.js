"use strict";
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              | Callback sem argumento |
//* podemos inserir uma função de callback como argumento de função
//* nela conseguimos definir o tipo de argumento aceito pela callback
//* e também o tipo de retorno da mesma
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(fCallback, userName) {
    console.log(`preparando a função`);
    const greet = fCallback(userName);
    console.log(greet);
}
preGreeting(greeting, `Lucas`);
// preparando a função
// Olá Lucas
