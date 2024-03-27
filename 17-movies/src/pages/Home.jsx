import { Link } from 'react-router-dom'
import SearchFrom from '../components/SearchFrom'
import { useGlobalContext } from '../utilities/context'

const defaultImg =
  'https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'

const Home = () => {
  const { movies, isLoading } = useGlobalContext()
  if (isLoading) {
    return <div className='loading'></div>
  }

  if (movies === null) return

  return (
    <section className='section-container'>
      <SearchFrom />
      <div className='section-center movies-center'>
        {movies.map((move) => {
          const { Title, Year, imdbID, Poster } = move
          return (
            <Link to={`/movie/${imdbID}`} key={imdbID} className='movie-card'>
              <img
                src={Poster === 'N/A' ? defaultImg : Poster}
                alt={Title}
                className='img'
              />
              <div className='movie-info'>
                <p className='movie-title'>{Title}</p>
                <p>{Year}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Home
