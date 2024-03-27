import './assets/Styles/main.css'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Home />
      <Modal />
      <Footer />
    </>
  )
}

export default App
