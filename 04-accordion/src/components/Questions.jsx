import SingleQuestion from './SingleQuestion'

const Questions = ({ questions }) => {
  return (
    <div className='questions-center'>
      <div className='title-wrapper'>
        <h2>CHALLENGE FAQS</h2>
      </div>
      <div>
        {questions.map((question, index) => {
          return <SingleQuestion key={question.id} {...question} />
        })}
      </div>
    </div>
  )
}

export default Questions
