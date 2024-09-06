import { useState } from 'react';

const RandomNumber = () => {
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 61); 
    setNumber(randomNumber);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <button onClick={generateRandomNumber}>Sortear Número</button>
      {number !== null && <div style={{ fontSize: '24px', marginTop: '10px' }}>{number}</div>}
    </div>
  );
};

export default RandomNumber;
