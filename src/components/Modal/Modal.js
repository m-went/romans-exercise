import styles from './Modal.module.scss';
import ReactModal from 'react-modal';
import UserDetails from '../UserDetails/UserDetails';

function Modal({ closeModal, chosenUser, isOpen }) {
  ReactModal.setAppElement('#root');

  const handleClick = () => {
    closeModal();
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} className={`${styles.modal}`}>
      <UserDetails user={chosenUser} />
      <button className={`${styles.button}`} onClick={handleClick}>
        Close
      </button>
    </ReactModal>
  );
}

export default Modal;
