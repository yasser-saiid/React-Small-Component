import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const navLinks = useRef(null)
  const links = useRef(null)

  useEffect(() => {
    const navLinksHeight = navLinks.current
    const linksHeight = links.current.getBoundingClientRect().height

    if (showLinks) {
      navLinksHeight.style.height = `${linksHeight}px`
    } else {
      navLinksHeight.style.height = 0
    }
  }, [showLinks])

  return (
    <nav className='navbar'>
      <div className='section-center navbar-center'>
        <div className='navbar-header'>
          <Link to='/' className='logo'>
            Recipes
          </Link>

          <button
            className='navbar-toggle-btn'
            onClick={() => setShowLinks(!showLinks)}
          >
            {showLinks ? (
              <FaTimes className='close-btn' />
            ) : (
              <FaBars className='open-btn' />
            )}
          </button>
        </div>
        <div className='navbar-links' ref={navLinks}>
          <ul className='links' ref={links}>
            <li className='link' onClick={() => setShowLinks(false)}>
              <Link to='/'>home</Link>
            </li>
            <li className='link' onClick={() => setShowLinks(false)}>
              <Link to='/about'>about</Link>
            </li>
            <li className='link' onClick={() => setShowLinks(false)}>
              <Link to='/recipes'>recipes</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
