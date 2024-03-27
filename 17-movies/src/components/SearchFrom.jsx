import { useGlobalContext } from '../utilities/context'

const SearchFrom = () => {
  const { error, setSearchQuery, searchQuery } = useGlobalContext()

  return (
    <form className='form' onSubmit={(e) => e.preventDefault()}>
      <input
        type='text'
        name='movie'
        id='movie'
        className='form-input'
        placeholder='search for a movie'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className='form-search-btn'>search</button>
      {error.show && <div className='error-msg'>{error.msg}</div>}
    </form>
  )
}

export default SearchFrom
