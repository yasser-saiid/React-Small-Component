import { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useGlobalContext } from '../utilities/context'

const SearchForm = () => {
  const { handleSearch, query } = useGlobalContext()
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(inputRef.current.value)
    inputRef.current.value = ''
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h4 className='form-title'>
        <span>W </span>- Search Engine
      </h4>
      <div className='form-row'>
        <input
          type='text'
          className='form-input'
          id='query'
          name='query'
          placeholder='search - W '
          ref={inputRef}
        />
        <button type='submit' className='btn form-btn'>
          <FaSearch />
        </button>
      </div>
    </form>
  )
}

export default SearchForm
