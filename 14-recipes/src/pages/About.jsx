import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from '../components'
import aboutImg from '../assets/Images/about.jpeg'
const About = () => {
  return (
    <section className='about'>
      <div className='section-center'>
        <h2 className='about-title'>about us</h2>
        <div className='underline'></div>
        <div className='about-content'>
          <article className='about-text'>
            <h3>amazing and healthy recipes</h3>
            <p>
              Cooking Is An Art, But All Art Requires Knowing Something About
              The Techniques And Materials, here you will find amazing recipes
            </p>
            <Link className='btn' to='/recipes'>
              more recipe
            </Link>
          </article>
          <article className='about-image'>
            <img src={aboutImg} alt='about Img' className='img' />
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
