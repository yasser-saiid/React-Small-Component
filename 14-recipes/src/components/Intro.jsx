import { Link } from 'react-router-dom'
import recipe_1 from '../assets/Images/recipe-1.jpg'
import recipe_2 from '../assets/Images/recipe-2.jpg'
import recipe_3 from '../assets/Images/recipe-3.jpg'

const Intro = () => {
  return (
    <div className='intro'>
      <div className='intro-center'>
        <article className='intro-images'>
          <img src={recipe_1} alt='recipe-1' className='img recipe-img-1' />
          <img src={recipe_2} alt='recipe-1' className='img recipe-img-2' />
          <img src={recipe_3} alt='recipe-1' className='img recipe-img-3' />
        </article>
        <article className='intro-text'>
          <h3>healthy recipes</h3>
          <p>
            Cooking is an art, but all art requires knowing something about the
            techniques and materials
          </p>
          <Link className='btn' to='/recipes'>
            more recipe
          </Link>
        </article>
      </div>
    </div>
  )
}

export default Intro
