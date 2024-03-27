import './assets/Styles/main.css'
import Followers from './components/Followers'
import Loading from './components/Loading'
import PaginationBtn from './components/PaginationBtn'
import { useGlobalContext } from './utilities/context'

function App() {
  const { isLoading } = useGlobalContext()

  return (
    <>
      <div className='Header'></div>
      {isLoading ? <Loading /> : <Followers />}
      <PaginationBtn />
    </>
  )
}

export default App
