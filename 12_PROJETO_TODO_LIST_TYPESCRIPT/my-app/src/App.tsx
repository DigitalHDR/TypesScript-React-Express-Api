import React, { useState } from 'react'
// import logo from './logo.svg';
import Modal from './components/Modal'
import Footer from './components/Footer'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

import style from './App.module.css'

import { ITask } from './interface/Task'

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpadate, setTaskToUpadate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
        // retorna todos os id, diferente do id que quer remover
        // vai retornar todos menos o que foi removido
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal')
    if (display) {
      modal!.classList.remove('hide')
    } else {
      modal!.classList.add('hide')
    }
  }

  const editTask = (task: ITask) => {
    hideOrShowModal(true)
    setTaskToUpadate(task)
  }

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updateTask: ITask = { id, title, difficulty }

    const updateItems = taskList.map(task => {
      return task.id === updateTask.id ? updateTask : task
    })

    setTaskList(updateItems)

    hideOrShowModal(false)
  }

  return (
    <div>
      <Modal
        children={
          <TaskForm
            btnText="Editar tarefa"
            taskList={taskList}
            task={taskToUpadate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={style.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
