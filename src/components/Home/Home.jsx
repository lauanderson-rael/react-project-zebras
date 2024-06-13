
import PropTypes from 'prop-types';
import './confrontos'

import './Home.css';
import CardConfronto from '../CardConfronto';
import Bilhete from '../Bilhete';
import { confrontos } from './confrontos';

const Home = ({ adicionarZebra, bilhete }) => {
  // const confrontos = [
  // ];

  const handleAdicionarZebra = (confronto, event) => {
    event.preventDefault();
    adicionarZebra(confronto);
  };

  return (
    <div className="home">
      <div className="confrontos">
        {confrontos.map((confronto) => (
          <CardConfronto
          key={confronto.id}
          confronto={confronto}
          adicionarZebra={(event) => handleAdicionarZebra(confronto, event)}
          />


        ))}
      </div>
      <Bilhete bilhete={bilhete} />
    </div>
  );
};

Home.propTypes = {
  adicionarZebra: PropTypes.func.isRequired,
  bilhete: PropTypes.array.isRequired,
};

export default Home;
