const Products = ({ products }) => {
  return (
    <div className='products-center'>
      {products.map((product) => {
        const { id, img, name, price } = product
        return (
          <article className='product' key={id}>
            <small className='price'>$ {price} - kg</small>
            <img src={img} alt={name} className='img product-img' />
            <h3 className='product-name'>{name}</h3>
          </article>
        )
      })}
    </div>
  )
}

export default Products
