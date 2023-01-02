"use strict";
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              | Argumentos opcionais com '?' |
//* nem sempre utilizamos todos os paràmetros de uma função
//* mas se ele for opcional, precisamos declarar isso para o ts
//* e ainda deixar ele no fim da lista de parametros
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function modernGreeting(name, greet) {
    if (greet) {
        return `olá ${greet} ${name}, tudo bem`;
    }
    return `olá ${name}, tudo bem`;
}
console.log(modernGreeting('lucas'));
// olá lucas, tudo bem
console.log(modernGreeting('lucas', 'admin'));
// olá admin lucas, tudo bem
