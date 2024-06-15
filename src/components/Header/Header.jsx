
import PropTypes from 'prop-types';
import './Header.css';


const Header = ({ mostrarPopup }) => (
  <header className="cabecalho">

    <img src="./../../../public/images/logo02.png" alt="logo" width="100px"/>

    <div className="login-signup">
      <button onClick={mostrarPopup}>Login / Sign-up</button>
    </div>

  </header>
);

Header.propTypes = {
  mostrarPopup: PropTypes.func.isRequired,
};

export default Header;
