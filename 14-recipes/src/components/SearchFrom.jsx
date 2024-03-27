import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useGlobalContext } from '../utilities/context'

const SearchFrom = () => {
  const { setSearchTerm } = useGlobalContext()
  return (
    <div className='section-center'>
      <form className='form' onSubmit={(e) => e.preventDefault()}>
        <div className='form-row'>
          <label htmlFor='recipe' className='form-label'>
            search your favorite recipe
          </label>
          <input
            type='text'
            className='form-input'
            id='recipe'
            name='recipe'
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete='off'
          />
        </div>
      </form>
    </div>
  )
}

export default SearchFrom
