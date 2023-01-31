import mongoose from 'mongoose'
import config from 'config'

async function connect() {
  const dbUri = config.get<string>('dbUri')
  console.log('Conectou ao banco de dados!')

  try {
    await mongoose.connect(dbUri)
  } catch (e) {
    console.log('Não foi possivel conectar!')
    console.log(`ERRO: ${e}`)
  }
}

export default connect
