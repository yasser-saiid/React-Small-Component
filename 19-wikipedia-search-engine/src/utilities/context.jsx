import { useReducer, useEffect, createContext, useContext } from 'react'

import reducer from './reducer'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const api = `http://hn.algolia.com/api/v1/search?query=`

const AppContext = createContext()

const initialState = {
  isLoading: true,
  hits: [],
  query: 'chatgpt',
  page: 0,
  nbPages: 0,
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING })
    try {
      const response = await fetch(url)
      const data = await response.json()
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      })
    } catch (error) {
      console.log(error)
    }
  }

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id })
  }

  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value })
  }

  const handleSearch = (value) => {
    dispatch({ type: HANDLE_SEARCH, payload: value })
  }

  useEffect(() => {
    fetchStories(`${api}${state.query}&page=${state.page}`)
  }, [state.query, state.page])

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handlePage, handleSearch }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
