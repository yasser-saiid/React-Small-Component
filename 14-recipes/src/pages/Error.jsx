import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error'>
      <div className='section-center'>
        <h2 className='error-code'>
          4<span>0</span>4
        </h2>
        <h3 className='error-message'>
          Page <span>Not</span> Found
        </h3>
        <Link to='/'>back to home page</Link>
      </div>
    </section>
  )
}

export default Error
