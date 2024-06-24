
import './styles.css'

export function SignUp() {
    return (
        <div>
            <header className="cabecalho-sign">
                <img src="images/logo02.png" alt="logo" width="80px"/>
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
                        <button type="submit" className="btn btn-primary">Criar Conta</button>
                    </form>
                </div>
            </div>
        </div>


        </div>
    );
}
