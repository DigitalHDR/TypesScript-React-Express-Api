//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*        | type alias |
//* é um recurso que permite criar um tipo e determinar o que 
//* ele verifica
//* desta maneira fica mais fácil de chamá-lo em vez de criar
//* expressões complexas com Unian types, por exemplo.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//todo ========== MANEIRA COM TYPE ALIAS ===================

type ID = string | number 

function showId(id: ID) {
  console.log(`O ID é: ${id}`)
}

showId(1) //O ID é: 1
showId('200') //O ID é: 200

//todo ======== MANEIRA NORMAL COM UNIÃO TYPE ==============

// function showId(id: string | number) {
//   console.log(`O ID é: ${id}`)
// }

// showId(1) //O ID é: 1
// showId('200') //O ID é: 200