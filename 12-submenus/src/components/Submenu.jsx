import { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'
import subLinks from '../data'

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()
  const submenuRef = useRef(null)

  useEffect(() => {
    const submenu = submenuRef.current
    const submenuWidth = submenu.getBoundingClientRect().width / 2

    const { center, top } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${top}px`
  }, [location])

  const linksLength = links.length

  return (
    <div
      className={`submenu ${isSubmenuOpen && linksLength && 'show'}`}
      ref={submenuRef}
    >
      <h3>{page}</h3>
      <div className='submenu-center'>
        {links.map((link, index) => {
          const { label, icon, url } = link
          return (
            <a href={url} key={index} className='submenu-link'>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Submenu
