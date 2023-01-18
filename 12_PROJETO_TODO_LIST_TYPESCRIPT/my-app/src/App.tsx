// import React from 'react';
// import logo from './logo.svg';
import Footer from './components/Footer'
import Header from './components/Header'
import TaslForm from './components/TaskForm'
import TaskList from './components/TaskList'

import style from './App.module.css'

import { ITask } from './interface/Task'

function App() {
  return (
    <div>
      <Header />
      <main className={style.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaslForm btnText="Criar Tarefa" />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
