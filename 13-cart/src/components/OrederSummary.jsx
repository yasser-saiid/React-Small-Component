import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const OrederSummary = () => {
  const { totalItems, totalCoast } = useGlobalContext()
  const [showAside, setShowAside] = useState(false)
  return (
    <aside className={`order-summary ${showAside && 'show'}`}>
      <button
        className='order-summary-toggle-btn'
        onClick={() => setShowAside(!showAside)}
      >
        {showAside ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
      <div className='order-summary-title'>
        <h3>order summary</h3>
      </div>
      <div className='order-details'>
        <article>
          <small>total items</small>
          <small className='total-items'>{totalItems}</small>
        </article>
        <article>
          <small>total coast </small>
          <small className='total-coast'>{totalCoast} $</small>
        </article>
        <div className='any-thing'></div>
        <button className='checkout'>checkout</button>
      </div>
    </aside>
  )
}

export default OrederSummary
