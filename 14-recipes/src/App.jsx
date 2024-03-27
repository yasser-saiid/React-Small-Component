import { Routes, Route } from 'react-router-dom'
import { Home, About, Recipes, SingleRecipe, Error } from './pages'

import './assets/Styles/main.css'
import { Navbar, Footer } from './components'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/:recipeID' element={<SingleRecipe />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
