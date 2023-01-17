import React from 'react'

type Props = {
    btnText: string
}

const TaslForm = ({btnText}: Props) => {
  return (
    <div>
      <div>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" placeholder="Título da tarefa" />
      </div>

      <div>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" />
      </div>
      <input type="submit" value={btnText} />
    </div>
  )
}

export default TaslForm
