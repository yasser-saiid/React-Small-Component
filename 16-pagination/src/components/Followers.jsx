import Follower from './Follower'

import { useGlobalContext } from '../utilities/context'

const Followers = () => {
  const { followers } = useGlobalContext()

  return (
    <div className='followers-container'>
      <div className='title-wrapper'>
        <h2 className='title'>github followers</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center follower-center'>
        {followers.map((item) => {
          return <Follower key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}

export default Followers
