import React from 'react';

const modalStyle = {
  position: 'fixed',
  width: '100%',
  height: '100vh',
  top: 0,
  left: 0,
  background: 'rgba(0,0,0,0.75)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  background: '#FFFFFF',
  padding: '1rem',
  borderRadius: '0.5rem',
  minWidth: '50%',
  maxWidth: '90%',
};

const Modal = ({ children }) => {
  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>{children}</div>
    </div>
  );
};

export default Modal;
