import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useGlobalContext } from '../utilities/context'
const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()

  return (
    <div className='btn-container'>
      <button
        disabled={isLoading}
        className={`${page === 0 ? 'btn not-active' : 'btn'}`}
        type='button'
        onClick={() => handlePage('decrease')}
      >
        <FaArrowLeft />
      </button>
      <p className='pages'>
        {page + 1} <span>of</span> {nbPages}
      </p>
      <button
        disabled={isLoading}
        className={`${page === nbPages - 1 ? 'btn not-active' : 'btn'}`}
        type='button'
        onClick={() => handlePage('increase')}
      >
        <FaArrowRight />
      </button>
    </div>
  )
}

export default Buttons
