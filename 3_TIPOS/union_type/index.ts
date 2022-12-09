//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Union Type |
//*             melhor alternativa que o 'any'
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// function showBalance(balance: string | number) {
//     console.log(`O saldo da conta é R$${balance}`)
// }

// showBalance(100)
// //O saldo da conta é R$100
// // não da erro pois o typescript vai usar ou string ou number

// showBalance('400')
// // O saldo da conta é R$400
// // não da erro pois o typescript vai usar ou string ou number

// // showBalance(true)
// //! esse da erro, pois é um tipo que nao esta nos parametros


//todo ==================MANEIRA ANTIGA POUCO USADO==============
// const arr2: Array<number | string | boolean> = [1,'teste',true]