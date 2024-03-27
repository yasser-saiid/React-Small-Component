import sectionImg from '../assets/Images/type.png'
const Title = () => {
  return (
    <div className='title-wrapper'>
      <img src={sectionImg} alt='' />
      <h2>our products</h2>
      <div className='underline'></div>
      <p>
        fruits and Vegetables are an important part of a healthy diet, and
        variety is as important as quantity.
      </p>
    </div>
  )
}

export default Title
