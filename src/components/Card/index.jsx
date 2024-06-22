import './styles.css'
import '../../../public/imgs/pixelcut-export f.png'
import PropTypes from 'prop-types';


const Teste = ({ confronto, adicionarZebra }) => (

    <section>
      <div className="card-container">
          <div className="card">
              <img className="triangle-top-left" src="../../../public/imgs/pixelcut-export f.png" alt="f"></img>
              <span className="data">{confronto.horario} <br /> {confronto.data}</span>
              <main className="content">
                  <div className="top-box">
                      <img src={confronto.imagemX} alt={confronto.timeX}/>
                      <span>{confronto.timeX}</span>
                  </div>

                  <div className="center">X</div>

                  <div className="bottom-box">
                      <img src={confronto.imagemY} alt={confronto.timeY}/>
                      <span>{confronto.timeY}</span>
                  </div>
              </main>
              <img className="triangle-bottom-right"  src="../../../public/imgs/pixelcut-export z.png" alt="z"></img>
          </div>
          <button className="add-button" type="button" onClick={adicionarZebra}>ADICIONAR ZEBRA</button>
      </div>
  </section>
);

Teste.propTypes = {
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

export default Teste;
