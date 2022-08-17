import React, { useState, useEffect } from 'react'
import './App.css';
import Divizinha from './components/Divizinha';

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Count: ', count);
  }, [count]);

  const aumentar = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Divizinha text={count} />
        <button onClick={aumentar}>Aumentar</button>
      </header>
    </div>
  );
}

export default App;
