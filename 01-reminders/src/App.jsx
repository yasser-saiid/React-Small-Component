import { useState } from 'react'
import './assets/Styles/main.css'
import List from './components/List'
import notificationsData from './data'

function App() {
  const [notifications, setNotifications] = useState(notificationsData)

  const removeNotification = (id) => {
    const newNotifications = notifications.filter((item) => item.id !== id)
    setNotifications(newNotifications)
  }

  return (
    <section className='section-container'>
      <div className='section-center'>
        <article className=' notification-center'>
          <h2>you have {notifications.length} notifications</h2>
          <div className='underline'></div>
          <List
            notifications={notifications}
            removeNotification={removeNotification}
          />
          {notifications.length > 0 ? (
            <button className='btn clear' onClick={() => setNotifications([])}>
              clear all
            </button>
          ) : (
            <small>you don't have any new notifications</small>
          )}
        </article>
      </div>
    </section>
  )
}

export default App
