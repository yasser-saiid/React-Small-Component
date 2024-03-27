import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Reviews = ({ people }) => {
  const [index, setIndex] = useState(0)
  const { img, name, quote, title } = people[index]

  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return (number = 0)
    }
    if (number < 0) {
      return (number = people.length - 1)
    }
    return number
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1

      return checkIndex(newIndex)
    })
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1

      return checkIndex(newIndex)
    })
  }
  return (
    <article className='review-card'>
      <div className='img-container'>
        <img src={img} alt={name} className='person-img img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h5 className='person-name'>{name}</h5>
      <small className='person-title'>{title}</small>
      <p className='person-quote'>{quote}</p>
      <div className='btn-container'>
        <button className='btn-prev' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='btn-next' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  )
}

export default Reviews
