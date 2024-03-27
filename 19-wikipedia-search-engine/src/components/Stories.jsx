import { useGlobalContext } from '../utilities/context'

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext()

  if (isLoading) {
    return <div className='loading'></div>
  }
  return (
    <div className='stories-container'>
      {hits.map((story) => {
        const { objectID, url, title, author, num_comments, points } = story
        return (
          <article key={objectID} className='story'>
            <h4 className='story-title'>{title}</h4>
            <p className='story-info'>
              {points} points by <span>{author}</span> | {num_comments} comments
            </p>
            <div className='story-btn'>
              <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='story-link'
              >
                read more
              </a>
              <button
                type='button'
                className='remove-story'
                onClick={() => removeStory(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Stories
