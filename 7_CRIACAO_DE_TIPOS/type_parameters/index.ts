//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | Type parameters |
//* é um recurso de generics, utilizado para dizer que algum
//* parâmetro de uma função, por exemplo, é a chave de um objeto,
//* que também é parâmetro, desta maneira conseguimos criar uma
//* ligação entre o tipo genérico e sua chave
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function getSomekey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${[key]} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomekey(server, 'ram'))
//! A chave ram está presente no objeto e tem o valor de 32GB

console.log(getSomekey(server, 'hd'))
//! A chave hd está presente no objeto e tem o valor de 2TB