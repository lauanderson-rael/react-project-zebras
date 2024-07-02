
import './styles.css';
import { Link } from 'react-router-dom';

const PageError404 = () => {
  return (
    <div className="error-container">
      <header className="cabecalho-error">
        <h2>Erro <span>404</span></h2>
      </header>
      <div className="fundo">
        <div className="error-message">
            <div className="image-error">
                <img width='200px' src="images/zeb404.png" alt="404" />
            </div>
            <p>Desculpe, a página que você está procurando não foi encontrada <span>:(</span></p>
        </div>
      </div>

      <Link to={'/'}>
        <button className="btn-voltar">
          <p>VOLTAR AO INÍCIO</p>
        </button>
      </Link>

    </div>
  );
}

export default PageError404;
