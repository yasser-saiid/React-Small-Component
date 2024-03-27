import { useEffect, useState } from 'react'

const Buttons = ({ category, filteredProduct }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='buttons-center'>
      {category.map((item, index) => {
        return (
          <button
            type='button'
            className={`btn filter-btn ${
              index === activeIndex ? 'active' : 'null'
            }`}
            key={item}
            onClick={() => {
              filteredProduct(item)
              setActiveIndex(index)
            }}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}

export default Buttons
