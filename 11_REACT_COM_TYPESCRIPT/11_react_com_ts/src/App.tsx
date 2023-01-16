// import React from 'react'
// import logo from './logo.svg'
import './App.css'
import Destructuring, { Category } from './components/Destructuring'

//! importando componente
import FirstComponent from './components/FirstComponent'

//! desestruturando props
import SecondComponent from './components/SecondComponent'

//! useState
import State from './components/State'

function App() {
  //!variaveis
  const name: string = 'Lucas'
  const age: number = 30
  const isWorking: boolean = true

  //!funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}!`
  }

  return (
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
    </div>
  )
}

export default App
