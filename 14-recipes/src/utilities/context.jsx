import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [recipes, setRecipes] = useState([])

  const getRecipes = async () => {
    setIsLoading(true)
    try {
      const response = await axios(`${url}${searchTerm}`)
      const recipes = response.data.meals
      if (recipes) {
        setRecipes(recipes)
      } else {
        setRecipes([])
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error.response)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getRecipes()
  }, [searchTerm])

  return (
    <AppContext.Provider
      value={{
        isLoading,
        recipes,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
