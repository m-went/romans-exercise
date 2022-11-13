import styles from './Modal.module.scss';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

import UserDetails from '../UserDetails/UserDetails';

const modalContainer = document.getElementById('modal-container');

function Modal({ closeModal, chosenUser }) {
  const modalNode = document.createElement('div');
  modalNode.classList.add(`${styles.modalBackground}`);

  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  const handleClick = () => {
    closeModal();
  };

  return ReactDOM.createPortal(
    <div className={`${styles.modal}`}>
      <UserDetails user={chosenUser} />
      <button className={`${styles.button}`} onClick={handleClick}>
        Close
      </button>
    </div>,
    modalNode
  );
}

export default Modal;