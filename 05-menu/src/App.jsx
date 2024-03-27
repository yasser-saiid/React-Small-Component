import { useState } from 'react'
import './assets/Styles/main.css'
import data from './data'
import Title from './components/Title'
import Buttons from './components/Buttons'
import Products from './components/Products'

const uniqueCategory = ['all', ...new Set(data.map((item) => item.category))]

function App() {
  const [products, setProducts] = useState(data)
  const [category, setCategory] = useState(uniqueCategory)

  const filteredProduct = (category) => {
    if (category === 'all') {
      setProducts(data)
      return
    }
    const newProducts = data.filter((product) => product.category === category)
    setProducts(newProducts)
  }

  return (
    <section className='section-container full-height'>
      <div className='section-center'>
        {/* title container */}
        <Title />
        {/* buttons container */}
        <Buttons category={category} filteredProduct={filteredProduct} />
        {/* products container */}
        <Products products={products} />
      </div>
    </section>
  )
}

export default App
