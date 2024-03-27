import { useGlobalContext } from './context'
const Modal = () => {
  const { modalOpen, closeModal, correct, questions } = useGlobalContext()
  return (
    <div className={modalOpen ? 'modal show' : 'modal'}>
      <div className='modal-center'>
        <h4 className='modal-title'>congrats!</h4>
        <img
          src='https://i.gifer.com/origin/16/162b41786d99b9d7e7b03549c4e19ae2_w200.gif'
          alt='congrats'
          className='img congrats-img'
        />
        <p>
          you answered{' '}
          <span>{((correct / questions.length) * 100).toFixed(0)}%</span>of
          questions correctly
        </p>
        <button className='btn close-modal-btn' onClick={closeModal}>
          try again
        </button>
      </div>
    </div>
  )
}

export default Modal
