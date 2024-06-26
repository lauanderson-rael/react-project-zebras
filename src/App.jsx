import { useState } from 'react';
import Home from './Pages/Home';

function App() {

  const [bilhete, setBilhete] = useState([]);

  const adicionarZebra = (zebra) => {
    setBilhete((prevBilhete) => {
      if (prevBilhete.some(item => item.id === zebra.id)) {
        return prevBilhete; // Não adicionar se o item já estiver no bilhete
      }
      return [...prevBilhete, zebra];
    });
  };

  const removerZebra = (id) => {
    setBilhete((prevBilhete) => prevBilhete.filter((zebra) => zebra.id !== id));
  };

  return (
    <div className="app">
      <Home adicionarZebra={adicionarZebra} removerZebra={removerZebra} bilhete={bilhete}/>
    </div>
  );
}

export default App;
