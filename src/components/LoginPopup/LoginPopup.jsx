import PropTypes from 'prop-types';
import './LoginPopup.css';
import { Link } from 'react-router-dom';

const LoginPopup = ({ fecharPopup }) => (
  <div className="popup">
    <div className="popup-inner">
      <button className="close-button" onClick={fecharPopup}>X</button>
        <h1>Login</h1>
      <form >
        <div >
          <label>E-mail</label>
          <input className="form-control" type="email" required />
        </div>

        <div className="form-group">
          <label>Senha</label>
          <input  className="form-control" type="password" required />
        </div>
        <button type="submit">ENTRAR</button>
      </form>
      <div className="signup-link">
       Ainda não tem conta? <Link to="/sign">Crie uma aqui...</Link>
      </div>
    </div>
  </div>
);

LoginPopup.propTypes = {
  fecharPopup: PropTypes.func.isRequired,
};

export default LoginPopup;
