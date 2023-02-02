import mongoose from 'mongoose'
import config from 'config'

import Logger from './logger'

mongoose.set('strictQuery', true)

async function connect() {
  const dbUri = config.get<string>('dbUri')
  Logger.info('Conectou ao banco de dados!')

  try {
    await mongoose.connect(dbUri)
  } catch (e) {
    Logger.error('Não foi possivel conectar!')
    Logger.error(`ERRO: ${e}`)
    process.exit(1)
  }
}

export default connect
