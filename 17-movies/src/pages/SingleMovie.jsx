import { useState, useEffect } from 'react'
import useFetch from '../utilities/usefetch'
import { Link, useParams } from 'react-router-dom'

import { api } from '../utilities/context'

const defaultImg =
  'https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'

const SingleMovie = () => {
  const { id } = useParams()
  // const [isLoading, setIsLoading] = useState(true)
  // const [movie, setMovie] = useState(null)
  // const [error, setError] = useState({ show: false, msg: '' })
  const { data: movie, isLoading, error } = useFetch(`i=${id}`)

  // const getMovie = async (url) => {
  //   setIsLoading(true)
  //   try {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     setMovie(data)
  //     setIsLoading(false)
  //   } catch (error) {
  //     console.log(error)
  //     setError({ show: true, msg: 'no movies' })
  //   }
  // }

  // useEffect(() => {
  //   getMovie(`${api}i=${id}`)
  // }, [id])

  if (isLoading) {
    return <div className='loading'></div>
  }

  if (!movie) return

  const { Title, Plot, Poster, Actors, Director } = movie

  return (
    <section className='section-container'>
      <article className='section-center'>
        <Link className='btn' to='/'>
          back to movies
        </Link>
      </article>
      {/* movie */}
      <div className='section-center single-movie'>
        <div className='img-container'>
          <img
            src={Poster === 'N/A' ? defaultImg : Poster}
            alt={Title}
            className='img'
          />
        </div>
        <div className='info-container'>
          <h5>{Title}</h5>
          <p>{Plot}</p>
          <p>Actors : {Actors}</p>
          <p>Director : {Director}</p>
        </div>
      </div>
    </section>
  )
}

export default SingleMovie
