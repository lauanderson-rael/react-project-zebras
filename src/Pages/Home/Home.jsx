
// import PropTypes from 'prop-types';
// import './confrontos'
// import './styles.css';
// import CardConfronto from '../../components/CardConfronto/CardConfronto';
// import Bilhete from '../../components/Bilhete/Bilhete';
// import { confrontos } from './confrontos';
// import Header from '../../components/Header/Header';
// import { useState } from 'react';
// import LoginPopup from '../../components/LoginPopup/LoginPopup';
// import Footer from '../../components/Footer/Footer';

// const Home = ({ adicionarZebra, bilhete }) => {


//   const handleAdicionarZebra = (confronto, event) => {
//     event.preventDefault();
//     adicionarZebra(confronto);
//   };

//   const [mostrarPopup, setMostrarPopup] = useState(false);

//   return (

//     <div className='body'>
//       <Header mostrarPopup={() => setMostrarPopup(true)} />
//       <div className="home">
//         <div className="confrontos">
//           {confrontos.map((confronto) => (
//             <CardConfronto
//             key={confronto.id}
//             confronto={confronto}
//             adicionarZebra={(event) => handleAdicionarZebra(confronto, event)}
//             />
//           ))}
//         </div>
//         <Bilhete bilhete={bilhete} />
//       </div>

//       {mostrarPopup && <LoginPopup fecharPopup={() => setMostrarPopup(false)}/>}

//     <Footer/>
//     </div>
//   );
// };

// Home.propTypes = {
//   adicionarZebra: PropTypes.func.isRequired,
//   bilhete: PropTypes.array.isRequired,
// };

// export default Home;

import PropTypes from 'prop-types';
import './confrontos'
import './styles.css';
import CardConfronto from '../../components/CardConfronto/CardConfronto';
import Bilhete from '../../components/Bilhete/Bilhete';
import { confrontos } from './confrontos';
import Header from '../../components/Header/Header';
import { useState } from 'react';
import LoginPopup from '../../components/LoginPopup/LoginPopup';
import Footer from '../../components/Footer/Footer';

const Home = ({ adicionarZebra, bilhete }) => {

  const handleAdicionarZebra = (confronto, event) => {
    event.preventDefault();
    adicionarZebra(confronto);
  };

  const [mostrarPopup, setMostrarPopup] = useState(false);

  return (
    <div className='page-container'>
      <Header mostrarPopup={() => setMostrarPopup(true)} />
      <div className='eventos'>

      <span>Eventos: </span>

      </div>
      <div className="content-wrap">
        <div className="main-content">

          <div className="confrontos">
            {confrontos.map((confronto) => (
              <CardConfronto className="event"
                key={confronto.id}
                confronto={confronto}
                adicionarZebra={(event) => handleAdicionarZebra(confronto, event)}
              />
            ))}
          </div>
          <Bilhete bilhete={bilhete} />
        </div>
        {mostrarPopup && <LoginPopup fecharPopup={() => setMostrarPopup(false)} />}
      </div>

      <Footer />
    </div>
  );
};

Home.propTypes = {
  adicionarZebra: PropTypes.func.isRequired,
  bilhete: PropTypes.array.isRequired,
};

export default Home;
