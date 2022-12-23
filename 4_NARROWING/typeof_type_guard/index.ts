//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              | typeof Type Guard |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function sum(a: number | string, b: number | string) {
  if (typeof a === 'string' && typeof b === 'string') {
    console.log(parseFloat(a) + parseFloat(b))
  } else if (typeof a === 'number' && typeof b === 'number') {
    console.log(a + b)
  } else {
    console.log('impossivel realizar a soma')
  }
}

sum('4', '5,36')
//! 9

sum(1, 10)
//! 11

sum('2', 3)
//! impossivel realizar a soma