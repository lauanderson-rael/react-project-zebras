import { useState } from 'react';

import Header from './components/Header';

import './App.css';
import LoginPopup from './components/LoginPopup';
import Home from './components/Home/Home';

function App() {
  const [bilhete, setBilhete] = useState([]);
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const adicionarZebra = (confronto) => {
    setBilhete([...bilhete, confronto]);
  };

  return (
    <div className="app">
      <Header mostrarPopup={() => setMostrarPopup(true)} />
      <Home  adicionarZebra={adicionarZebra} bilhete={bilhete}/>
      {mostrarPopup && <LoginPopup fecharPopup={() => setMostrarPopup(false)} />}
    </div>
  );
}

export default App;
