"use strict";
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              | Operador in |
//* operador in é utilizado para checar se existe uma propriedade
//* no objeto, outro recurso interessante para o narrowing, pois
//* propriedades também podem ser opcinais
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog('turca');
const bob = new Dog('Bob', 'Pastor alemão');
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log(`O cachorro é um SRD`);
    }
}
showDogDetails(turca);
//! O cachorro é um SRD
showDogDetails(bob);
//! O cachorro é da raça Pastor alemão
