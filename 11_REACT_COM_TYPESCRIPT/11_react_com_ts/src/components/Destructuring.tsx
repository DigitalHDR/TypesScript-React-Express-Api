import React from 'react'

type Props = {
  title: string
  content: string
  commentSQty: number
  tags: string[]
}

const Destructuring = ({ title, content, commentSQty, tags }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <h2>{content}</h2>
      <div>
        {tags.map((tag) => (
            <span>#{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default Destructuring
