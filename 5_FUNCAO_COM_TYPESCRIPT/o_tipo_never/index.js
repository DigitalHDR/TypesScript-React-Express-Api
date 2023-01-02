"use strict";
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              | O tipo never |
//* o never é um tipo de retorno semelhante ao void
//* porem é utilizado quando a função não retorna nada
//* um exemplo: retorno de erros
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function showErroMessage(msg) {
    throw new Error(msg);
}
showErroMessage('algum erro aconteceu');
//! Uncaught Error: algum erro aconteceu
