import React, { createContext, useState } from 'react';
import Modal from '../components/Modal';

export const ModalContext = createContext([]);

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    show: false,
    content: <div></div>,
  });

  const showModal = (content) => {
    setModal({
      show: true,
      content,
    });
  };

  const closeModal = () => {
    setModal({
      show: false,
      content: <div></div>,
    });
  };

  return (
    <ModalContext.Provider value={[showModal, closeModal]}>
      {modal.show && <Modal>{modal.content}</Modal>}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
