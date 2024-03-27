import { MdDelete, MdEditDocument } from 'react-icons/md'

const Task = ({ taskList, removeTask, editTask }) => {
  return (
    <>
      {taskList.map((item) => {
        const { id, name } = item
        return (
          <li className='list-item' key={id}>
            <p>{name}</p>
            <button className='edit-btn' onClick={() => editTask(id, name)}>
              <MdEditDocument />
            </button>
            <button className='delete-btn' onClick={() => removeTask(id)}>
              <MdDelete />
            </button>
          </li>
        )
      })}
    </>
  )
}

export default Task
