import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='section-center footer-center'>
        <Link to='/' className='logo'>
          recipes
        </Link>
        <p>Simple Recipes</p>
      </div>
    </div>
  )
}

export default Footer
