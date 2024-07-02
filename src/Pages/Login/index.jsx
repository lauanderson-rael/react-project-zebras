import { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const processarEnvio = (event) => {
    event.preventDefault();
    // Adicione aqui a lógica para o login, como chamadas de API
    console.log('Email:', email);
    console.log('Senha:', senha);
    // voltar para home após o login

  };

  return (
    <div className="login">
      <header className="cabecalho">
        <Link  to={'/'} style={{background: 'red', display: 'flex' }}> <img src="images/logo02.png" alt="logo" width="60px" /> </Link>
      </header>

      <div className="popup-inner">
        {/* <button className="close-button">X</button> */}
        <h1>Login</h1>
        <form onSubmit={processarEnvio}>
          <div className="form-group">
            <label>E-mail</label>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              className="form-control"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit">ENTRAR</button>
        </form>
        <div className="signup-link">
          Ainda não tem conta? <Link to="/sign">Crie uma aqui...</Link>
        </div>
      </div>
    </div>
  );
};


export default Login;
