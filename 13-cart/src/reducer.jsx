import {
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  CART_TOTAL_ITEM,
  GET_TOTAL,
} from './actions'

const reducer = (state, action) => {
  if (action.type === REMOVE_ITEM) {
    const newItems = state.cart.filter((item) => item.id !== action.payload.id)
    return { ...state, cart: newItems }
  }

  // INCREASE AND DECREASE FUNCTIONS
  /*  if (action.type === INCREASE_ITEM) {
    let increaseSingleItem = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    })
    return { ...state, cart: increaseSingleItem }
  }

  if (action.type === DECREASE_ITEM) {
    let decreaseSingleItem = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
      .filter((item) => item.quantity !== 0)
    return { ...state, cart: decreaseSingleItem }
  } */
  // INCREASE AND DECREASE IN ONE FUNCTION
  if (action.type === CART_TOTAL_ITEM) {
    const cartNewItem = state.cart
      .map((item) => {
        if (action.payload.id === item.id) {
          if (action.payload.type === 'increase') {
            return { ...item, quantity: item.quantity + 1 }
          }
          if (action.payload.type === 'decrease') {
            return { ...item, quantity: item.quantity - 1 }
          }
        }

        return item
      })
      .filter((item) => item.quantity !== 0)

    return { ...state, cart: cartNewItem }
  }

  if (action.type === GET_TOTAL) {
    let { totalItems, totalCoast } = state.cart.reduce(
      (totals, currentItem) => {
        const { price, quantity } = currentItem
        totals.totalItems += quantity

        totals.totalCoast += price * quantity

        return totals
      },
      {
        totalItems: 0,
        totalCoast: 0,
      }
    )
    totalCoast = parseFloat(totalCoast.toFixed(2))
    return { ...state, totalItems, totalCoast }
  }

  return state
}

export default reducer
