import { useState, useRef, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { links, social } from '../data'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const navLinksRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height

    if (showLinks) {
      navLinksRef.current.style.height = `${linksHeight}px`
    } else {
      navLinksRef.current.style.height = `0px`
    }
  }, [showLinks])
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        {/* HEADER */}
        <div className='nav-header'>
          <h3 className='logo'>
            nav<span>bar</span>
          </h3>
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            {showLinks ? (
              <FaTimes className='times' />
            ) : (
              <FaBars className='bars' />
            )}
          </button>
        </div>
        {/* LINKS */}
        <div className='nav-links' ref={navLinksRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li className='link' key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        {/* ICONS */}
        <div className={`nav-icons ${showLinks && 'show'}`}>
          <ul className='icons'>
            {social.map((item) => {
              const { id, url, icon } = item
              return (
                <li className='icon' key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
