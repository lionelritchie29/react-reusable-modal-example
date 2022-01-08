import React from 'react';

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
  return (
    <main style={mainStyle}>
      <button style={buttonStyle}>Click Me!</button>
    </main>
  );
};

export default App;
