import { useState, useEffect } from 'react'
import './assets/Styles/main.css'
import data from './data'
import {
  TiChevronRight,
  TiChevronLeft,
  TiStarFullOutline,
} from 'react-icons/ti'
import { FaQuoteRight } from 'react-icons/fa'

function App() {
  const [people, setPeople] = useState(data)
  const [activeIndex, setActiveIndex] = useState(0)

  // you can set functions like functions in reviews project
  // or try new way to toggle slides

  useEffect(() => {
    if (activeIndex < 0) {
      setActiveIndex(people.length - 1)
    }
    if (activeIndex > people.length - 1) {
      setActiveIndex(0)
    }
  }, [activeIndex, people])

  useEffect(() => {
    const autoSlides = setInterval(() => {
      setActiveIndex(activeIndex + 1)
    }, 3000)

    return () => clearInterval(autoSlides)
  }, [activeIndex])

  return (
    <section className='section-container full-height'>
      <div className='title-wrapper'>
        <h2>our team reviews</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center slider-center'>
        {people.map((person, index) => {
          /* 
            at first or by default, all slid card or all items in people list ,they will all get the next class
          */
          let position = 'next'
          /* 
            - after that, the only item whose index number in people list matches the activeIndex state taken the active class

            or

            - if the index for that item in the list matches to whatever i have in activeIndex as my state value then this item or slide will get that active class
          */
          if (index === activeIndex) {
            position = 'active'
          }
          /* 
            the last step we have to conditions,

            I would want to set up two conditions
            - One, as I'm changing the slides, I would want to set up the slide that has the index value of less than the current one is the last slid
            - And also by default, I would want to place the last item in the list is the prev slid

            1 - The item whose index number is one number less than the activeIndex state takes the prev class..
            So, I want to check if the index number is one number less than the activeIndex state or active slide, that will get the prev class

            2 - if the activeIndex state equal zero and the index equal the people list length - 1
            that means the app initial render,the activeIndex equal zero, so the last item in our people list, that will get the prev class
            
            the item index in people list matches people.length - 1, that will get the prev class 
          */
          if (
            index === activeIndex - 1 ||
            (activeIndex === 0 && index === people.length - 1)
          ) {
            position = 'prev'
          }

          const { id, img, name, title, quote } = person
          return (
            <article className={`slide-card ${position}`} key={id}>
              <img src={img} alt={name} className='img person-img' />
              <h3>{name}</h3>
              <p className='title'>{title}</p>
              <div>
                <TiStarFullOutline className='icon' />
                <TiStarFullOutline className='icon' />
                <TiStarFullOutline className='icon' />
                <TiStarFullOutline className='icon' />
                <TiStarFullOutline className='icon' />
              </div>
              <p className='quote'>{quote}</p>
              <FaQuoteRight className='quote-icon' />
            </article>
          )
        })}
        <button
          className='btn prev-btn'
          onClick={() => setActiveIndex(activeIndex - 1)}
        >
          <TiChevronLeft />
        </button>
        <button
          className='btn next-btn'
          onClick={() => setActiveIndex(activeIndex + 1)}
        >
          <TiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
