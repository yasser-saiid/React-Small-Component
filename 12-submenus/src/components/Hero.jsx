import heroImage from '../assets/Images/Learning-cuate.png'
import bannerImage from '../assets/Images/banner_bg.png'
import { useGlobalContext } from '../context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()
  return (
    <section className='section-container hero' onMouseOver={closeSubmenu}>
      <div className='section-center hero-center'>
        <div className='hero-img-container'>
          <img src={heroImage} alt='hero-pic' className='img hero-image' />
        </div>
        <div className='hero-content'>
          <p className='subtitle'>EVERY CHILD YEARNS TO LEARN</p>
          <h1 className='title'>Making Your Childs World Better</h1>
          <p className='intro-text'>
            Learning by playing and laughing. Our mission is to make education
            easier and fun for children. We have the best teachers and the best
            curricula suitable for all ages
          </p>
          <div className='btn-container'>
            <button className='btn'>view courses</button>
            <button className='btn start-btn'>get started</button>
          </div>
        </div>
      </div>
      <div className='section-center feature-container'>
        <article className='feature'>
          <h3>Better Future</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            molestias doloribus, iste totam itaque non?
          </p>
        </article>
        <article className='feature'>
          <h3>Learn Anywhere</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            molestias doloribus, iste totam itaque non?
          </p>
        </article>
        <article className='feature'>
          <h3>Expert Teacher</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            molestias doloribus, iste totam itaque non?
          </p>
        </article>
      </div>
    </section>
  )
}

export default Hero
