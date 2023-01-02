//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | Interface com parâmetro opcional |
//* as interface podem conter propriedades de objeto opcionais
//* basta add a interrrogação no nome do propriedade
//* exemplo: nome?: string
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

interface User {
  email: string,
  role?: string
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o e-mail: ${user.email}`)

  if(user.role) {
    console.log(`A função do usuário é ${user.role}`)
  }
}

const u1: User = { email: 'lucas@email.com', role: 'admim'}

const u2: User = { email: 'adima@email.com'}

showUserDetails(u1)
// O usuário tem o e-mail: lucas@email.com
// A função do usuário é admim

showUserDetails(u2)
// O usuário tem o e-mail: adima@email.com