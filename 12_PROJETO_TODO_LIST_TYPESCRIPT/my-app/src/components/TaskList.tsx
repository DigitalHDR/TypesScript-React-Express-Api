import React from 'react'
import { ITask } from '../interface/Task'

import styles from './TaskList.module.css'

type Props = {
  taskList: ITask[]
}

const TaskList = ({taskList}: Props) => {
  return (
    <>
    {taskList.length > 0 ? (
      taskList.map((task) => (
        <div key={task.id}>
          <p>{task.title}</p>
        </div>
      ))
    ): (
      <p>Não há tarefas cadatradas!</p>
    )}
    </>
  )
}

export default TaskList