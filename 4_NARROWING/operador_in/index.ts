//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              | Operador in |
//* operador in é utilizado para checar se existe uma propriedade
//* no objeto, outro recurso interessante para o narrowing, pois
//* propriedades também podem ser opcinais
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// class Dog {
//   name
//   breed

//   constructor(name: string, breed?: string) {
//     this.name = name
//     if (breed) {
//       this.breed = breed
//     }
//   }
// }

// const turca = new Dog('turca')
// const bob = new Dog('Bob', 'Pastor alemão')

// function showDogDetails(dog: Dog) {
//   if ('breed' in dog) {
//     console.log(`O cachorro é da raça ${dog.breed}`)
//   } else {
//     console.log(`O cachorro é um SRD`)
//   }
// }

// showDogDetails(turca)
// //! O cachorro é um SRD

// showDogDetails(bob)
// //! O cachorro é da raça Pastor alemão