import { useState } from 'react';
import PropTypes from 'prop-types';
import './Bilhete.css'

const Bilhete = ({ bilhete }) => {
  const [valores, setValores] = useState({});

  const handleChange = (id, valor) => {
    setValores({
      ...valores,
      [id]: valor,
    });
  };

  return (
    <div className="bilhete">
      <h2>BILHETE</h2>
      <div className='container'>
      {bilhete.map((item) => (
        <div key={item.id} className="item-bilhete">
          <div>{item.timeX} vs {item.timeY} <hr /></div>
          <input
            type="number"
            placeholder="Valor"
            onChange={(e) => handleChange(item.id, e.target.value)}
          />
        </div>
      ))}
      </div>

      <div className='bilhete-input'>
        <input type="text" placeholder=' valor' />
        <p>Retornos: <span>R$ 0,00</span></p>
      </div>
      <button onClick={() => console.log(valores)}>Finalizar Aposta</button>
    </div>
  );
};

Bilhete.propTypes = {
  bilhete: PropTypes.array.isRequired,
};

export default Bilhete;
