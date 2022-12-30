//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              | Callback sem argumento |
//* podemos inserir uma função de callback como argumento de função
//* nela conseguimos definir o tipo de argumento aceito pela callback
//* e também o tipo de retorno da mesma
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function greeting(name: string): string {
  return `Olá ${name}`
}

function preGreeting(fCallback: (name: string) => string, userName: string) {
    console.log(`preparando a função`)

    const greet = fCallback(userName)

    console.log(greet)
}


preGreeting(greeting, `Lucas`)
// preparando a função
// Olá Lucas