import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../utilities/context'

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()

  return (
    <section className='section-container full-height'>
      <button className='open-sidebar' onClick={openSidebar}>
        <FaBars />
      </button>
      <div className='section-center home-center'>
        <h2>HOME</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          reprehenderit, odit obcaecati mollitia dolores voluptates.
        </p>
        <button className='btn' onClick={openModal}>
          open modal
        </button>
      </div>
    </section>
  )
}

export default Home
