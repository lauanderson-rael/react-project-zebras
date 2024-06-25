import './styles.css';
import PropTypes from 'prop-types';
import { VscChromeClose } from "react-icons/vsc";

const Bilhete = ({ bilhete, removerZebra }) => {
  return (
    <div className="bilhete">
      <h2>BILHETE</h2>
      <div className='container'>
        {bilhete.map((item) => (
          <div key={item.id} className="item-bilhete">
            <div>{item.timeX} vs {item.timeY}</div>
            <VscChromeClose className='remover' onClick={() => removerZebra(item.id)}></VscChromeClose>
          </div>
        ))}
      </div>

      <div className='bilhete-value'>
        <input type="text" placeholder=' Valor' />
        <p>Retornos: <span>R$ 0,00</span></p>
      </div>
      <button onClick={() => console.log('Finalizar Aposta')}>Finalizar Aposta</button>
    </div>
  );
};

Bilhete.propTypes = {
  bilhete: PropTypes.array.isRequired,
  removerZebra: PropTypes.func.isRequired,
};

export default Bilhete;
