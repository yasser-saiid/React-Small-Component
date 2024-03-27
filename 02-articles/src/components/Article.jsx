import { useState } from 'react'

const Article = ({ id, img, title, text, date, author, removeArticle }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <article className='article-card'>
      <span className='fav'>Favorite</span>
      <img src={img} alt={author} className='img' />
      <div>
        <small>{date}</small>
        <small>
          created by : <span>{author}</span>
        </small>
      </div>
      <footer>
        <h3>{title}</h3>
        <p>
          {showMore ? text : `${text.slice(0, 130)}...`}
          <button onClick={() => setShowMore(!showMore)} className='show-btn'>
            {showMore ? 'show less' : 'show more'}
          </button>
        </p>

        <button className='delete-btn' onClick={() => removeArticle(id)}>
          not interested
        </button>
      </footer>
    </article>
  )
}

export default Article
