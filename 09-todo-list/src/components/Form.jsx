const Form = ({ handelSubmit, taskName, handelTaskName, isEdit }) => {
  return (
    <form className='form' onSubmit={handelSubmit}>
      <input
        type='text'
        className='form-input'
        name='task'
        id='task'
        placeholder='add new task'
        value={taskName}
        onChange={handelTaskName}
      />
      <button type='submit' className='btn add-btn'>
        {isEdit ? 'edit' : 'add'}
      </button>
    </form>
  )
}

export default Form
