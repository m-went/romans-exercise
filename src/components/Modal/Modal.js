import styles from './Modal.module.scss';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const modalContainer = document.getElementById('modal-container');

function Modal({ closeModal, chosenUser }) {
  const modalNode = document.createElement('div');

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
      <h1>Hello</h1>
      <button onClick={handleClick}>Close modal</button>
    </div>,
    modalNode
  );
}

export default Modal;
