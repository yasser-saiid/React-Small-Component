import { useGlobalContext } from './context'
const Form = () => {
  const { handleChange, handleSubmit, quiz, error } = useGlobalContext()
  return (
    <section className='section-container full-height'>
      <div className='section-center'>
        <form className='form'>
          <h4 className='form-title'>setup quiz</h4>
          <div className='form-row'>
            <label htmlFor='amount' className='form-label'>
              amount
            </label>
            <input
              type='number'
              name='amount'
              id='amount'
              className='form-input'
              value={quiz.amount}
              onChange={handleChange}
              min={1}
              max={50}
            />
          </div>
          <div className='form-row'>
            <label htmlFor='category' className='form-label'>
              category
            </label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.category}
              onChange={handleChange}
            >
              <option value='sport'>sport</option>
              <option value='history'>history</option>
              <option value='art'>art</option>
            </select>
          </div>
          <div className='form-row'>
            <label htmlFor='difficulty' className='form-label'>
              category
            </label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>
          {error && (
            <p className='error-msg'>
              can't generate questions, please try different options
            </p>
          )}
          <button className='btn btn-block submit-btn' onClick={handleSubmit}>
            start
          </button>
        </form>
      </div>
    </section>
  )
}

export default Form
