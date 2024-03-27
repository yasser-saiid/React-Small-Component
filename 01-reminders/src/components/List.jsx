const List = ({ notifications, removeNotification }) => {
  return (
    <ul>
      {notifications.map((item) => {
        const { id, name, notification } = item
        return (
          <li key={id}>
            <div className='title'>
              <h5>{name}</h5>
              <button className='remove' onClick={() => removeNotification(id)}>
                remove
              </button>
            </div>
            <p>{notification}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default List
