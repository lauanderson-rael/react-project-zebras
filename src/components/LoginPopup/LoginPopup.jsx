
import PropTypes from 'prop-types';
import './LoginPopup.css';

const LoginPopup = ({ fecharPopup }) => (
  <div className="popup">
    <div className="popup-inner">
      <button onClick={fecharPopup}>FECHAR</button>
      <form>
        <label>Email:</label>
        <input type="email" required />
        <label>Senha:</label>
        <input type="password" required />
        <button type="submit">ENTRAR</button>
      </form>
    </div>
  </div>
);

LoginPopup.propTypes = {
  fecharPopup: PropTypes.func.isRequired,
};

export default LoginPopup;