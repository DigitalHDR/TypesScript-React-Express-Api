class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  productWinthDicount(discount) {
    return this.price * ((100 - discount) / 100)
  }
}

const shirt = new Product('Camisa gola v', 20)

console.log(shirt)
console.log(shirt.productWinthDicount(10))
console.log(shirt.productWinthDicount(50))

console.log('=================================')

const tenis = new Product('Tenis', 120)

console.log(tenis)
console.log(tenis.productWinthDicount(20))
console.log(tenis.productWinthDicount(50))