import './confrontos';
import './styles.css';
import PropTypes from 'prop-types';
import Bilhete from '../../components/Bilhete/Bilhete';
import { confrontos } from './confrontos';
import Header from '../../components/Header/Header';
import { useState } from 'react';
import LoginPopup from '../../components/LoginPopup/LoginPopup';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/index'


const Home = ({ adicionarZebra, removerZebra, bilhete }) => {
  const handleAdicionarZebra = (confronto, event) => {
    event.preventDefault();
    adicionarZebra(confronto);
  };

  const [mostrarPopup, setMostrarPopup] = useState(false);

  return (
    <div className='home'>
      <Header mostrarPopup={() => setMostrarPopup(true)} />

      <div className="container-main">
        <div className='container-page'>
          <div className='title'>EVENTOS</div>
          <div className="wrapper">
              <div className="cards">
                {confrontos.map((confronto) => (
                  <Card
                    key={confronto.id}
                    confronto={confronto}
                    adicionarZebra={(event) => handleAdicionarZebra(confronto, event)}
                  />
                ))}
              </div>
               
          </div>
        </div>

        <Bilhete bilhete={bilhete} removerZebra={removerZebra} />

      </div>
      <div className="footer-mobile"><Footer/></div>
      {mostrarPopup && <LoginPopup fecharPopup={() => setMostrarPopup(false)} />}
    </div>
  );
};

Home.propTypes = {
  adicionarZebra: PropTypes.func.isRequired,
  removerZebra: PropTypes.func.isRequired,
  bilhete: PropTypes.array.isRequired,
};

export default Home;
