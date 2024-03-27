import { useState, useEffect, useContext, createContext } from 'react'
import useFetch from './usefetch'

const AppContext = createContext()

export const api = 'http://www.omdbapi.com/?=&apikey=232d1c8c&'

export const AppProvider = ({ children }) => {
  // const [isLoading, setIsLoading] = useState(true)
  // const [movies, setMovies] = useState(null)
  // const [error, setError] = useState({ show: false, msg: '' })
  const [searchQuery, setSearchQuery] = useState('avengers')

  const { data: movies, isLoading, error } = useFetch(`s=${searchQuery}`)

  // const getMovies = async (url) => {
  //   setIsLoading(false)
  //   try {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     if (data.Response === 'True') {
  //       setMovies(data.Search)
  //       setError({ show: false, msg: '' })
  //     } else {
  //       setError({ show: true, msg: data.Error })
  //     }
  //     setIsLoading(false)
  //   } catch (error) {
  //     console.log(error)
  //     setIsLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   if (searchQuery === '') return
  //   getMovies(`${api}s=${searchQuery}`)
  // }, [searchQuery])

  return (
    <AppContext.Provider
      value={{ isLoading, movies, searchQuery, error, setSearchQuery }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
