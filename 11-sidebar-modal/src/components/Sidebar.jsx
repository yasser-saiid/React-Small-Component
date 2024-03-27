import { FaTimes } from 'react-icons/fa'
import { links, social } from '../data'
import { useGlobalContext } from '../utilities/context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <aside className={`sidebar  ${isSidebarOpen && 'show'}`}>
      {/* header */}
      <header className='sidebar-header'>
        <h3 className='logo'>LOGO</h3>
        <button className='close-sidebar' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </header>
      {/* Links */}
      <div className='sidebar-links'>
        <ul>
          {links.map((item) => {
            const { id, text, url } = item
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            )
          })}
        </ul>
      </div>

      {/* footer */}
      <div className='sidebar-footer'>
        <ul>
          {social.map((item) => {
            const { id, url, icon } = item
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
