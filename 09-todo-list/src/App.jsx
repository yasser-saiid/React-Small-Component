import { useEffect, useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import './assets/Styles/main.css'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [taskName, setTaskName] = useState('')
  const [taskList, setTaskList] = useState(getLocalStorage())
  const [isEdit, setIsEdit] = useState(false)
  const [editID, setEditID] = useState(null)

  const handelSubmit = (e) => {
    e.preventDefault()
    // if input has value
    if (taskName) {
      const newTask = { id: new Date().getTime().toString(), name: taskName }
      setTaskList([...taskList, newTask])
    }
    // if input has value and isEdit is true
    if (taskName && isEdit) {
      const editItem = taskList.map((taskItem) => {
        if (taskItem.id === editID) {
          return { ...taskItem, name: taskName }
        }
        return taskItem
      })
      setTaskList(editItem)
    }
    setEditID(null)
    setIsEdit(false)
    setTaskName('')
  }

  // add new task name by input value
  const handelTaskName = (e) => {
    setTaskName(e.target.value)
  }

  // delete single task
  const removeTask = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id)
    setTaskList(newTaskList)
    setTaskName('')
  }

  // edit single task
  const editTask = (id, name) => {
    setIsEdit(true)
    setEditID(id)
    setTaskName(name)
  }

  // Clear all tasks in task list
  const clearAll = () => {
    setTaskList([])
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(taskList))
  }, [taskList])

  return (
    <section className='section-container full-height'>
      <div className='title-wrapper'>
        <h2>To-do list</h2>
      </div>
      <div className='section-center'>
        {/* FORM */}
        <Form
          handelSubmit={handelSubmit}
          taskName={taskName}
          handelTaskName={handelTaskName}
          isEdit={isEdit}
        />
        {/* TASKS LIST */}
        <List
          taskList={taskList}
          clearAll={clearAll}
          removeTask={removeTask}
          editTask={editTask}
        />
      </div>
    </section>
  )
}

export default App
