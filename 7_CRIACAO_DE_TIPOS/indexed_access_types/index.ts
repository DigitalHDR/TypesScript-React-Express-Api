//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | Indexed access types |
//* a adordagem indexed access types pode criar um tipo baseado
//* em uma chave de objeto
//* ou seja conseguimos reaproveitar o tipo da chave para outra
//* locais como funções
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// type Truck = { km: number; kg: number; description: string }

// type km = Truck['km']

// const newTruck: Truck = {
//   km: 10000,
//   kg: 5000,
//   description: 'Caminhão para pouco carga',
// }

// function showKm(km: km) {
//   console.log(`O veículo tem a Km de:${km}`)
// }

// showKm(newTruck.km)
// //! O veículo tem a Km de:10000

// //todo =====================================================

// const newCar = {
//   km: 5000,
//   kg: 1000,
// }

// showKm(newCar.km)
// //! O veículo tem a Km de:5000