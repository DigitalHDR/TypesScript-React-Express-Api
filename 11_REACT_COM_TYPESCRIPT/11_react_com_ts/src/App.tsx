// import React from 'react'
// import logo from './logo.svg'
import { createContext } from 'react'
import './App.css'
import Destructuring, { Category } from './components/Destructuring'

//! importando componente
import FirstComponent from './components/FirstComponent'

//! utilizando contexto
import Context from './components/Context'

//! desestruturando props
import SecondComponent from './components/SecondComponent'

//! useState
import State from './components/State'

//! type
type textOrNull = string | null
type fixed = 'isso' | 'ou' | 'aquilo'

//! context
interface IAppContext {
  language: string
  framework: string
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  //!variaveis
  const name: string = 'Lucas'
  const age: number = 30
  const isWorking: boolean = true

  //!funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}!`
  }

  //! type
  const myText: textOrNull = 'tem algum texto aqui'
  let mySecondText: textOrNull = null

  // mySecondText = 'opa'

  const testandoFixed: fixed = 'aquilo'

  //! context
  const contextValeu: IAppContext = {
    language: 'javascript',
    framework: 'express',
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValeu}>
      <div className="App">
        <h1>TypeScript Com React</h1>
        <h2>Nome: {name}</h2>
        <h2>Age: {age}</h2>
        {isWorking && <p>Está trabalhando</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring
          title="Primeiro post 'Destructuring'"
          content="algum contéudo"
          commentSQty={10}
          tags={['ts', 'js']}
          category={Category.TS}
        />
        <Destructuring
          title="Segundo post 'Destructuring'"
          content="mais outro contéudo"
          commentSQty={5}
          tags={['css']}
          category={Category.P}
        />
        <State />
        {myText && <p>tem texto na variável {testandoFixed}</p>}

        {mySecondText && <p>tem texto na variável</p>}
        <Context />
      </div>
    </AppContext.Provider>
  )
}

export default App
