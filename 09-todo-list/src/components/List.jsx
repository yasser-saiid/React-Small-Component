import Task from './Task'

const List = ({ taskList, clearAll, removeTask, editTask }) => {
  return (
    <>
      {taskList.length > 0 && (
        <ul className='list'>
          <Task
            taskList={taskList}
            removeTask={removeTask}
            editTask={editTask}
          />
          <button className='clear-all' onClick={clearAll}>
            clear all
          </button>
        </ul>
      )}
    </>
  )
}

export default List
