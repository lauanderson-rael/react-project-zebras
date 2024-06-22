import { useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
function App() {

  const [bilhete, setBilhete] = useState([]);
  const adicionarZebra = (zebra) => {
    setBilhete([...bilhete, zebra]);
  };

  return (
      <div className="app">
        <Home  adicionarZebra={adicionarZebra} bilhete={bilhete}/>
      </div>

  );
}

export default App;
