import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useGlobalContext } from '../utilities/context'

const PaginationBtn = () => {
  const { data, setPage, page } = useGlobalContext()

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = 0
      }
      return prevPage
    })
  }

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = data.length - 1
      }

      return nextPage
    })
  }

  return (
    <div className='btn-container'>
      <div className='section-center btn-center'>
        <button type='button' className='btn' onClick={prevPage}>
          <FaChevronLeft />
        </button>
        <div className='pagination-btn'>
          {data.map((_, index) => {
            return (
              <button
                type='button'
                className={index === page ? 'btn active' : 'btn'}
                key={index}
                onClick={() => setPage(index)}
              >
                {index + 1}
              </button>
            )
          })}
        </div>
        <button type='button' className='btn' onClick={nextPage}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default PaginationBtn
