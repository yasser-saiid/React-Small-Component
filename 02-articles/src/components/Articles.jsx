import Article from './Article'

const Articles = ({ articles, removeArticle, loadArticles }) => {
  return (
    <section className='section-container full-height'>
      {/* TITLE WRAPPER */}
      <div className='section-center title-wrapper'>
        <h1 className='title'>web developer articles</h1>
        <div className='underline'></div>
      </div>
      {/*  ARTICLES SECTION */}

      {articles.length === 0 ? (
        <div className='section-center fall-back'>
          <p>no article's left</p>
          <button className='btn' onClick={loadArticles}>
            refresh
          </button>
        </div>
      ) : (
        <div className='section-center articles-center'>
          {articles.map((article) => {
            return (
              <Article
                key={article.id}
                {...article}
                removeArticle={removeArticle}
              />
            )
          })}
        </div>
      )}
    </section>
  )
}

export default Articles
