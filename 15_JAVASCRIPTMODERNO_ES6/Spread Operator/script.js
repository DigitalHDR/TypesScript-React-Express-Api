const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1,...a2]

console.log(a3)

const a4 = [0,...a1, 4]

console.log(a4)

console.log('===============================')

const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const otherInfos = {km: 100000, prince: 49000}

const car = {...carName, ...carBrand, ...otherInfos}

console.log(car)