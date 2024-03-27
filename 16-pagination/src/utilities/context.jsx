import { useState, useEffect, createContext, useContext } from 'react'
import { useFetch } from './useFetch'

const url = 'https://api.github.com/users/OsamaElzero/followers?per_page=100'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const { data, isLoading } = useFetch(url)
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (isLoading) return
    setFollowers(data[page])
  }, [isLoading, page])

  return (
    <AppContext.Provider value={{ isLoading, followers, data, page, setPage }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
