// import React from 'react'
// import logo from './logo.svg'
import './App.css'

function App() {
  const name: string = 'Lucas'
  const age: number = 30
  const isWorking: boolean = true

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
    </div>
  )
}

export default App
