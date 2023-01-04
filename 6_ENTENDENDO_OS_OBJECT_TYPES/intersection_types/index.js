"use strict";
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          |  Intersection types |
//* Intersection types são utilizados para criar tipo mais
//* complexos a partir de duas interfaces, por exemplo
//* podemos concatenar os tipo com '&'
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12,
};
console.log(arnold);
//! {name: 'Arnold', type: 'Shotgun', caliber: 12}
console.log(arnold.caliber);
