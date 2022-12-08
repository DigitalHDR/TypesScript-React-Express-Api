"use strict";
function passCoordinates(corrd) {
    console.log('X Coordinates:' + corrd.x);
    console.log('X Coordinates:' + corrd.y);
}
const objCoord = { x: 329, y: 657 };
passCoordinates(objCoord);
// passCoordinates(123) //! da erro, pois não é objeto
// passCoordinates('432') //! da erro, pois não é objeto
// passCoordinates('drtr') //! da erro, pois não é objeto
// passCoordinates([234]) //! da erro, pois não é objeto
// passCoordinates(['fdg']) //! da erro, pois não é objeto
// passCoordinates({ nome: 2343, sobreNome: 4354 })
//! da erro, pois tem que ser somente os que tem no parametro x ou y
// passCoordinates({ nome: 'lucas', sobreNome: 'fernando' })
//! da erro, pois tem que ser somente os que tem no parametro x ou y
const pessoaObjeto = {
    nome: 'lucas',
    sobreNome: 'fernando',
};
