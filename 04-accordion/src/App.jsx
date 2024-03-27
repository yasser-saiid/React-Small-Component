import { useState } from 'react'
import './assets/Styles/main.css'
import { QUESTIONS, IDEAS } from './data'
import Ideas from './components/Ideas'
import Questions from './components/Questions'

function App() {
  const [questions, setQuestions] = useState(QUESTIONS)
  const [ideas, setideas] = useState(IDEAS)

  return (
    <section className='section-container '>
      <div className='section-center '>
        <Questions questions={questions} />
        <Ideas ideas={ideas} />
      </div>
    </section>
  )
}

export default App
