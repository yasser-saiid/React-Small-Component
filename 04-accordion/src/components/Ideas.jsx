import { FiChevronsRight } from 'react-icons/fi'

const Ideas = ({ ideas }) => {
  return (
    <div className='ideas-center'>
      <div className='title-wrapper'>
        <h3>IDEAS TO TEST YOURSELF</h3>
      </div>
      {ideas.map((idea) => {
        return (
          <article key={idea.id}>
            <small>{idea.id}-</small>
            <small>{idea.text}</small>
          </article>
        )
      })}
    </div>
  )
}

export default Ideas
