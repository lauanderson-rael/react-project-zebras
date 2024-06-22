import PropTypes from 'prop-types';
import './LoginPopup.css';
// import { Link } from 'react-router-dom';

const LoginPopup = ({ fecharPopup }) => (
  <div className="popup">
    <div className="popup-inner">
      <button className="close-button" onClick={fecharPopup}>X</button>
      <form>
        <label>Email:</label>
        <input type="email" required />
        <label>Senha:</label>
        <input type="password" required />
        <button type="submit">ENTRAR</button>
      </form>
      <div className="signup-link">
       {/* Ainda não tem conta? <Link to="/sign">Crie uma aqui...</Link> */}
       Ainda não tem conta? <a to="/sign">Crie uma aqui...</a>
      </div>
    </div>
  </div>
);

LoginPopup.propTypes = {
  fecharPopup: PropTypes.func.isRequired,
};

export default LoginPopup;
