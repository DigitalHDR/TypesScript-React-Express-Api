// 1 var, let e const
var x = 10
var y = 15

if (y > 10) {
  var x = 5
  console.log(x, 'dentro do escopo')
}

console.log(x)

console.log('=====================================================')
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | let dentro de escopo nao altera o global |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

let a = 10
let b = 15

if (b > 10) {
  let a = 5
  console.log(a, 'dentro do escopo')
}

console.log(a)
console.log('=====================================================')
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | let dentro de escopo nao altera o global |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let i = 100

for (let i = 0; i < 5; i++) {
  console.log(i, 'dentro do escopo for')
}

console.log(i)
console.log('=====================================================')
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | const dentro de escopo nao altera o global |
//* não pode alterar o valor de uma constante
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function logName() {
  const nome = 'Lucas'
  console.log(nome, 'dentro do escopo da função')
}

const nome = 'aline'

logName()

console.log(nome)