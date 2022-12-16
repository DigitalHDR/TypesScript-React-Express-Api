//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*        | type alias |
//* é um recurso que permite criar um tipo e determinar o que 
//* ele verifica
//* desta maneira fica mais fácil de chamá-lo em vez de criar
//* expressões complexas com Unian types, por exemplo.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
showId(1); //O ID é: 1
showId('200'); //O ID é: 200
//todo ======== MANEIRA NORMAL COM UNIÃO TYPE ==============
// function showId(id: string | number) {
//   console.log(`O ID é: ${id}`)
// }
// showId(1) //O ID é: 1
// showId('200') //O ID é: 200
