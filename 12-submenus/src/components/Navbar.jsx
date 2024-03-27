import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import subLinks from '../data'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const btnLocation = e.target.getBoundingClientRect()
    const center = (btnLocation.left + btnLocation.right) / 2
    const top = btnLocation.bottom + 15
    openSubmenu(page, { center, top })
  }

  const handelCloseSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }

  return (
    <nav className='navbar' onMouseOver={handelCloseSubmenu}>
      <div className='section-center nav-center'>
        <div className='nav-header'>
          <h3 className='logo'>education</h3>
          <button className='open-sidebar-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {subLinks.map((link, index) => {
            const { page } = link
            return (
              <li key={index}>
                <button className='link-btn' onMouseOver={displaySubmenu}>
                  {page}
                </button>
              </li>
            )
          })}
        </ul>
        <button className='signin-btn'>sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
