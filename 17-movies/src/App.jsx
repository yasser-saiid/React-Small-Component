import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleMovie from './pages/SingleMovie'
import './assets/style/main.css'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<SingleMovie />} />
      </Routes>
    </>
  )
}

export default App
