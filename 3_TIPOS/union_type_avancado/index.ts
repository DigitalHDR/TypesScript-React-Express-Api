//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*        | Union Type avançado |
//* podemons utilizar condicionais para validação do tipo de uniao types
//* com isso é possivel trilhar rumos diferentes, baseado no tipo de dado
//* para checar o tipo utilizamos typeof
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function showUserRole(role: boolean | String) {
  if (typeof role === 'boolean') {
    return 'Usuário não aprovado!'
  }

  return `A função do usuário é: ${role}`
}

console.log(showUserRole(true))
console.log(showUserRole('admin'))
