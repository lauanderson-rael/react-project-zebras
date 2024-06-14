import { useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
function App() {
  const [bilhete, setBilhete] = useState([]);

  const adicionarZebra = (confronto) => {
    setBilhete([...bilhete, confronto]);
  };

  return (
      <div className="app">
        <Home  adicionarZebra={adicionarZebra} bilhete={bilhete}/>
      </div>

  );
}

export default App;


{/* <main>
      <div className="app">
        <Header mostrarPopup={() => setMostrarPopup(true)} />
        <Home  adicionarZebra={adicionarZebra} bilhete={bilhete}/>
        {mostrarPopup && <LoginPopup fecharPopup={() => setMostrarPopup(false)} />}
      </div>

      <div className='footer'>
      </div>

    </main> */}
