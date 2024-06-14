
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ mostrarPopup }) => (
  <header className="cabecalho">
    <div className="logo">Zebras de Futebol</div>
    <div className="login-signup">
      <button onClick={mostrarPopup}>Login / Sign-up</button>
    </div>
  </header>
);

Header.propTypes = {
  mostrarPopup: PropTypes.func.isRequired,
};

export default Header;
