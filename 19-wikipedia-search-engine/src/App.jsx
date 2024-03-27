import './assets/style/main.css'
import Buttons from './components/Buttons'
import SearchForm from './components/SearchForm'
import Stories from './components/Stories'
function App() {
  return (
    <section className='section-container'>
      <div className='section-center'>
        <SearchForm />
        <Buttons />
        <Stories />
      </div>
    </section>
  )
}

export default App
