import { useEffect, useState } from 'react'
import './assets/Styles/main.css'
import data from './data'
import Articles from './components/Articles'

function App() {
  const [articles, setArticles] = useState([])

  const removeArticle = (id) => {
    const newArticles = articles.filter((article) => article.id !== id)
    setArticles(newArticles)
  }

  const loadArticles = () => {
    setArticles(data)
  }

  useEffect(() => {
    setArticles(data)
  }, [])

  return (
    <Articles
      articles={articles}
      removeArticle={removeArticle}
      loadArticles={loadArticles}
    />
  )
}

export default App
