import './confrontos';
import './styles.css';
import PropTypes from 'prop-types';
import Bilhete from '../../components/Bilhete';
import { confrontos } from './confrontos';
import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import Card from '../../components/Card/index'


const Home = ({ adicionarZebra, removerZebra, bilhete }) => {
  const handleAdicionarZebra = (confronto, event) => {
    event.preventDefault();
    adicionarZebra(confronto);
  };


  return (
    <div className='home'>
      <Header />

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
      {/* <div className="footer-mobile"><Footer/></div> */}
    </div>

  );
};

Home.propTypes = {
  adicionarZebra: PropTypes.func.isRequired,
  removerZebra: PropTypes.func.isRequired,
  bilhete: PropTypes.array.isRequired,
};

export default Home;


// Funcionalidade
// Inicialmente: mostrarPopup é false, então o LoginPopup não é renderizado.
// Quando o Usuário Interage com o Header: A função mostrarPopup={() => setMostrarPopup(true)} é chamada, alterando mostrarPopup para true.
// Renderização do Popup: Quando mostrarPopup é true, {mostrarPopup && <LoginPopup fecharPopup={() => setMostrarPopup(false)} />} renderiza o LoginPopup.
// Fechar o Popup: Dentro de LoginPopup, chamar fecharPopup (que executa setMostrarPopup(false)) irá alterar mostrarPopup de volta para false, escondendo o popup.
