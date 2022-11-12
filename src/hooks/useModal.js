import { useState } from 'react';

function useModal(initialVal = false) {
  const [isOpen, setIsOpen] = useState(initialVal);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return [isOpen, openModal, closeModal];
}

export default useModal;
