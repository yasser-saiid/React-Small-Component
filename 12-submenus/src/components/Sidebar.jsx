import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import subLinks from '../data'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={`sidebar ${isSidebarOpen && 'show'}`}>
      <div className='sidebar-content'>
        <div className='sidebar-header'>
          <button className='close-sidebar-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className='sidebar-links'>
          {subLinks.map((item, index) => {
            const { page, links } = item
            return (
              <article key={index}>
                <a href={page} className='main-page-link'>
                  {page}
                </a>
                <div className='sidebar-sublinks'>
                  {links.map((item, index) => {
                    const { label, icon, url } = item
                    return (
                      <a href={url} key={index}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
