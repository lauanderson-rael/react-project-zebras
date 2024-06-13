import { useState } from 'react';
import PropTypes from 'prop-types';
import './Bilhete.css';

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
      <h2>Bilhete</h2>
      {bilhete.map((item) => (
        <div key={item.id} className="item-bilhete">
          <div>{item.timeX} vs {item.timeY}</div>
          <input
            type="number"
            placeholder="Valor"
            onChange={(e) => handleChange(item.id, e.target.value)}
          />
        </div>
      ))}
      <button onClick={() => console.log(valores)}>Finalizar Aposta</button>
    </div>
  );
};

Bilhete.propTypes = {
  bilhete: PropTypes.array.isRequired,
};

export default Bilhete;
