import React, { useContext } from 'react';
import { ModalContext } from './providers/ModalProvider';

const mainStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: '#8946A6',
};

const buttonStyle = {
  padding: '0.75rem 1.25rem ',
  border: 'none',
  background: '#4C0070',
  color: '#FFFFFF',
  fontSize: '1.1rem',
  borderRadius: '0.5rem',
  cursor: 'pointer',
};

const App = () => {
  const [showModal, closeModal] = useContext(ModalContext);

  const showDummyModal = () => {
    const content = (
      <div>
        <div>Hello, Life is good!</div>
        <button onClick={() => closeModal()}>Close</button>
      </div>
    );
    showModal(content);
  };

  return (
    <main style={mainStyle}>
      <button style={buttonStyle} onClick={() => showDummyModal()}>
        Click Me!
      </button>
    </main>
  );
};

export default App;
