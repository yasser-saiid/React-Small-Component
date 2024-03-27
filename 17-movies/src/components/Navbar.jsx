import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='section-center navbar-center'>
        <Link to='/' className='logo'>
          movies
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
