
import './styles.css'
import { Link } from 'react-router-dom';
export function SignUp() {
    return (
        <div>
            <header className="cabecalho-sign">
                <Link to={'/'}>
                <img src="images/logo02.png" alt="logo" width="80px"/>
                </Link>
            </header>

         <div>
            <div className="fundo">
                <div className="signup-container">
                    <h1>Criar conta</h1>
                    <form className="signup-form">
                        <div className="form-group">
                            <label htmlFor="username">Nome de usuário</label>
                            <input type="text" id="username" name="username" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" name="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirmar senha</label>
                            <input type="password" id="confirm-password" name="confirm-password" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">CRIAR CONTA</button>
                    </form>
                </div>
            </div>
        </div>


        </div>
    );
}
