import { useGlobalContext } from './context'
import './assets/style/main.css'
import Form from './Form'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    correctAnswer,
  } = useGlobalContext()

  if (waiting) {
    return <Form />
  }

  if (loading) {
    return <Loading />
  }
  const { question, incorrect_answers, correct_answer } = questions[index]
  // const answers = [...incorrect_answers, correct_answer]

  const answers = [...incorrect_answers]

  const randomIndex = Math.floor(Math.random() * 4)

  if (randomIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.splice(randomIndex, 0, correct_answer)
  }

  return (
    <>
      <section className='section-container full-height'>
        <div className='section-center'>
          <Modal />
          <article className='question'>
            <div className='correct-answer'>
              <p>
                correct answer : {correct} / {index}
              </p>
            </div>
            <h2
              className='question-title'
              dangerouslySetInnerHTML={{ __html: question }}
            />
            <div className='answer-container'>
              {answers.map((answer, index) => {
                return (
                  <button
                    className='btn btn-block'
                    key={index}
                    dangerouslySetInnerHTML={{ __html: answer }}
                    onClick={() => correctAnswer(correct_answer === answer)}
                  />
                )
              })}
            </div>
            <button className='btn next-question' onClick={nextQuestion}>
              next question
            </button>
          </article>
        </div>
      </section>
    </>
  )
}

export default App
