import React from 'react'
import { Banner, Intro } from '../components'

const Home = () => {
  return (
    <section className='home'>
      <div className='section-center'>
        <Banner />
        <Intro />
      </div>
    </section>
  )
}

export default Home
