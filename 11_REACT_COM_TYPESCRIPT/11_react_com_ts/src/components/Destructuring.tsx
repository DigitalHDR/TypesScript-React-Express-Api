import React from 'react'

type Props = {
  title: string
  content: string
  commentSQty: number
  tags: string[]

  //! enum
  category: Category
}

export enum Category {
    JS = 'JavaScript',
    TS = 'TypeScript',
    P = 'Python',
}

const Destructuring = ({ title, content, commentSQty, tags, category }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <h2>{content}</h2>
      <div>
        {tags.map(tag => (
          <span>#{tag}</span>
        ))}
      </div>
      <h4>Categoria:  {category}</h4>
    </div>
  )
}

export default Destructuring
