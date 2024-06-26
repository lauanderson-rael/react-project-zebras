
import PropTypes from 'prop-types';
import './styles.css';

const Header = ({ mostrarPopup }) => (
  <header className="cabecalho">
    <img src="images/logo02.png" alt="logo" width="80px"/>
    <div className="login-signup">
      <button onClick={mostrarPopup}>Login / Sign-up</button>
    </div>
  </header>
);

Header.propTypes = {
  mostrarPopup: PropTypes.func.isRequired,
};

export default Header;
Header.js