import { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validarFormulario = () => {
        const formErrors = {};
        if (!username) formErrors.username = "Nome de usuário é obrigatório";
        if (!email) {
            formErrors.email = "Email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "Email inválido";
        }
        if (!password) {
            formErrors.password = "Senha é obrigatória";
        } else if (password.length < 8) {
            formErrors.password = "A senha deve ter pelo menos 8 caracteres";
        }
        if (!confirmPassword) {
            formErrors.confirmPassword = "Confirmação de senha é obrigatória";
        } else if (password !== confirmPassword) {
            formErrors.confirmPassword = "As senhas não coincidem";
        }
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const enviarFormulario = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            console.log('Form submitted');
        }
    };

    return (
        <div>
            <header className="cabecalho" style={{ position: 'static'}}>
            <Link  to={'/'} style={{background: 'red', display: 'flex' }}> <img src="images/logo02.png" alt="logo" width="60px" /> </Link>
            </header>

            <div>
                <div className="fundo">
                    <div className="signup-container">
                        <h1>Criar conta</h1>
                        <form className="signup-form" onSubmit={enviarFormulario}>
                            <div className="form-group">
                                <label htmlFor="username">Nome de usuário</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                {errors.username && <div className="error">{errors.username}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <div className="error">{errors.email}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Senha</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <div className="error">{errors.password}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm-password">Confirmar senha</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    name="confirm-password"
                                    className="form-control"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                            </div>
                            <button type="submit" className="btn btn-primary">CRIAR CONTA</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
