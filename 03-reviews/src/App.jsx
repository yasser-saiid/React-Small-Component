import { useState } from 'react'
import './assets/Styles/main.css'
import reviews from './data'
import Reviews from './components/Reviews'

function App() {
  const [people, setPeople] = useState(reviews)

  return (
    <section className='section-container full-height'>
      <div className='section-center title-wrapper'>
        <h1>our reviews</h1>
        <div className='underline'></div>
      </div>
      <div className='section-center'>
        <Reviews people={people} />
      </div>
    </section>
  )
}

export default App
