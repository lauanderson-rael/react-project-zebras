import './styles.css'

export function SignUp() {
    return (
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
                        <label htmlFor="confirm-password">Confirmar Senha</label>
                        <input type="password" id="confirm-password" name="confirm-password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Criar Conta</button>
                </form>
            </div>
        </div>
    );
}
