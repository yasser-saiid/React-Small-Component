import { FaRegTrashAlt, FaMinus, FaPlus } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const CartItem = ({ id, img, name, details, price, quantity }) => {
  const { removeItem, increaseItem, decreaseItem, cartTotalItems } =
    useGlobalContext()
  return (
    <>
      <article className='cart-item' key={id}>
        {/* product details */}
        <div className='details'>
          <div className='product-img'>
            <img src={img} alt={name} className='img' />
          </div>
          <div className='product-detail'>
            <h5>{name}</h5>
            <small>{details}</small>
            <small>$ {price}</small>
            <button className='remove' onClick={() => removeItem(id)}>
              <FaRegTrashAlt />
            </button>
          </div>
        </div>
        {/* quantity details */}
        <div className='quantity-details'>
          <div className='total-quantity'>
            <button onClick={() => cartTotalItems(id, 'decrease')}>
              <FaMinus />
            </button>
            <p>{quantity}</p>
            <button onClick={() => cartTotalItems(id, 'increase')}>
              <FaPlus />
            </button>
          </div>
          <p className='total-price'>
            $ {parseFloat(quantity * price).toFixed(2)}
          </p>
        </div>
      </article>
    </>
  )
}

export default CartItem
