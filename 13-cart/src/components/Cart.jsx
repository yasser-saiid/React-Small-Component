import { FaShoppingBasket } from 'react-icons/fa'
import CartItem from './CartItem'
import OrederSummary from './OrederSummary'
import { useGlobalContext } from '../context'

const Cart = () => {
  const { cart } = useGlobalContext()
  return (
    <section className='cart-container'>
      <div className='cart-center'>
        {/*SHOPPING CART  */}
        <div className='shopping-cart'>
          {/* TITLE */}
          <div className='cart-title'>
            <h3>shopping cart</h3>
            <div className='cart-icon'>
              <h5>{cart.length}</h5>
              <FaShoppingBasket />
            </div>
          </div>
          {/* PRODUCTS DETAILS */}
          <div className='cart-items'>
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />
            })}
          </div>
        </div>
        {/* ORDER SUMMARY  */}
        <OrederSummary />
      </div>
    </section>
  )
}

export default Cart
