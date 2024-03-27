import { useEffect, useContext, useReducer, createContext } from 'react'
import reducer from './reducer'
import cartItem from './data'
import {
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  CART_TOTAL_ITEM,
  GET_TOTAL,
} from './actions'

const initialState = {
  cart: cartItem,
  totalItems: 0,
  totalCoast: 0,
}

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  // INCREASE AND DECREASE FUNCTIONS
  /* const increaseItem = (id) => {
    dispatch({ type: INCREASE_ITEM, payload: { id } })
  }
  const decreaseItem = (id) => {
    dispatch({ type: DECREASE_ITEM, payload: { id } })
  } */
  // INCREASE AND DECREASE IN ONE FUNCTION
  const cartTotalItems = (id, type) => {
    dispatch({ type: CART_TOTAL_ITEM, payload: { id, type } })
  }

  useEffect(() => {
    dispatch({ type: GET_TOTAL })
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        removeItem,
        // increaseItem,
        // decreaseItem,
        cartTotalItems,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
