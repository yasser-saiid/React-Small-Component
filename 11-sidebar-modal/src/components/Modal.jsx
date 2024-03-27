import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../utilities/context'

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()

  return (
    <section className={`modal-popup ${isModalOpen && 'show'}`}>
      <div className='modal-content'>
        <header className='modal-header'>
          <h3>modal popup</h3>
          <button className='close-modal' onClick={closeModal}>
            <FaTimes />
          </button>
        </header>
      </div>
    </section>
  )
}

export default Modal
