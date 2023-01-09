//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | Template literals type |
//* podemos criar tipos com template literals
//* é uma forma de customizar tipos de maneiras infinitas
//* pois o texto que formamos pode depender de variaveis
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

type testA = 'text'

type CustomType = `Some ${testA}`

const testing: CustomType = 'Some text'

//todo =====================================================

type a1 = 'testando'
type a2 = 'uniao'
type a3 = `${a1}` | `${a2}`

const novoTesting: a3 = 'testando'