import { useState, useEffect } from 'react'
import paginate from './paginate'

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  const getData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(paginate(data))
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { isLoading, data }
}
