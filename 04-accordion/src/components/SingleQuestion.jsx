import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6'

const SingleQuestion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <article className={`${showAnswer ? 'question active' : 'question'}`}>
      <header>
        <h5>{question}</h5>
        <button
          className='toggle-btn'
          onClick={() => {
            setShowAnswer(!showAnswer)
          }}
        >
          {showAnswer ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      <p>{answer}</p>
    </article>
  )
}

export default SingleQuestion
