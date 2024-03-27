const Follower = ({ id, login, avatar_url: image, html_url: url }) => {
  return (
    <article className='Follower-card'>
      <img src={image} alt={login} className='img peron-img' />
      <h5 className='person-name'>{login}</h5>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        profile
      </a>
    </article>
  )
}

export default Follower
