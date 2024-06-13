
import PropTypes from 'prop-types';
import './CardConfronto.css';

const CardConfronto = ({ confronto, adicionarZebra }) => (

  <div className="card-confronto">
    <img src={confronto.imagemX} alt={confronto.timeX} />
    <span>vs</span>
    <img src={confronto.imagemY} alt={confronto.timeY} />
    <div>{confronto.horario} - {confronto.data}</div>
    <button type="button" onClick={adicionarZebra}>Adicionar Zebra</button>
  </div>
);

CardConfronto.propTypes = {
  confronto: PropTypes.shape({
    id: PropTypes.number,
    timeX: PropTypes.string,
    timeY: PropTypes.string,
    imagemX: PropTypes.string,
    imagemY: PropTypes.string,
    horario: PropTypes.string,
    data: PropTypes.string,
  }).isRequired,
  adicionarZebra: PropTypes.func.isRequired,
};

export default CardConfronto;
