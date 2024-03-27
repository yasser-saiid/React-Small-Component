import { useState, useEffect } from 'react'

const api = 'http://www.omdbapi.com/?=&apikey=232d1c8c&'

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState(null)
  const getData = async (url) => {
    // setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === 'True') {
        setData(data.Search || data)
        setError({ show: false, msg: '' })
      } else {
        setError({ show: true, msg: data.Error })
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData(`${api}${urlParams}`)
  }, [urlParams])
  return { isLoading, error, data }
}

export default useFetch
