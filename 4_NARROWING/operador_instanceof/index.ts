//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              | Operador instanceof |
//* para além dos tipos primitivos, podemos trabalhar com instanceof
//* checando se uma dado pertence a uma determinada classe
//* e ele vai servir até para as nossas próprias classes
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

class User {
  name
  constructor(name: string) {
    this.name = name
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name)
  }
}

const jhon = new User('Jhon')
const paul = new SuperUser('Paul')

console.log(jhon)
// User
// name:"Jhon"
// [[Prototype]]:Object

console.log(paul)
// SuperUser
// name:"Paul"
// [[Prototype]]:User

function userGreeting(user: object) {
    if(user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
    }else if(user instanceof User) {
        console.log(`Olá ${user.name}.`)
    }
}

userGreeting(jhon)
//! Olá Jhon.

userGreeting(paul)
//! Olá Paul, deseja ver os dados do sistema?