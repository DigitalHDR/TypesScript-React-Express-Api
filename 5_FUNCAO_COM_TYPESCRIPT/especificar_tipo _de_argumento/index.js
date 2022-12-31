"use strict";
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              | Especificar tipo de argumento |
//* em generic funtions temos que utilizar parametros de tipos
//* semelhantes, se não recebemos um erro
//* porem ha a possibilidade de determinar o tipo também dos parametros
//* aceito, com uma sintaxe especial
//* isso faz com que a validação do TS aceite os tipos escolhidos
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
// [1, 2, 3, 4, 5, 6]
console.log(mergeArrays([1, 2, 3], ['lucas', 'fernando']));
// [1, 2, 3, 'lucas', 'fernando']
//! para que a 2° chamada da função funcione com numeros e texto 
//! add apos a função 'mergeArrays<number | string>()'
