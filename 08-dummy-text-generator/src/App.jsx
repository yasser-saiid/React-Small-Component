import { useState } from 'react'
import './assets/Styles/main.css'
import introImg from './assets/Images/intro-img.svg'
import { CiTextAlignCenter } from 'react-icons/ci'
import { BsThreeDotsVertical } from 'react-icons/bs'
import data from './data'

function App() {
  const [text, setText] = useState([])
  const [number, setNumber] = useState(0)

  const handleChange = (e) => {
    const value = e.target.value
    setNumber(parseInt(value))
  }

  const generateText = (e) => {
    e.preventDefault()
    setText(data.slice(0, number))
    setNumber(0)
  }

  return (
    <section className='section-container'>
      <div className='title-wrapper'>
        <h2 className='title'>dummy text generator</h2>
        <p className='intro-text'>
          generate the lorem ipsum or dummy text for your website or marketing
          project
        </p>
        <div className='underline'></div>
      </div>
      <div className='section-center form-center'>
        {/* IMG */}
        <div className='img-container'>
          <img src={introImg} alt='intro-pic' className='img' />
        </div>
        {/* FORM */}
        <form className='form' onSubmit={generateText}>
          <div className='form-row'>
            <label htmlFor='texts' className='from-label'>
              <CiTextAlignCenter className='icon' />
              <BsThreeDotsVertical className='icon' />
            </label>
            <input
              type='number'
              name='texts'
              id='texts'
              className='form-input'
              min={1}
              max={10}
              value={number}
              onChange={handleChange}
            />
            <button type='submit' className='btn'>
              generate
            </button>
          </div>
        </form>
      </div>
      {/* PARAGRAPHS */}
      <div className='section-center texts-center'>
        {text.map((item, index) => {
          return (
            <article key={index}>
              <p>{item}</p>
              <div className='underline'></div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default App
