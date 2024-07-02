
import './styles.css'; // Importa os estilos CSS fornecidos
import { Link } from 'react-router-dom';
const RulesPage = () => {
  return (
    <div>

        <header className="cabecalho" style={{position:'static'}}>
          <Link  to={'/'} style={{display: 'flex' }}> <img src="images/logo02.png" alt="logo" width="60px" /> </Link>
        </header>

      <div className="page-rules">
        <div className="signup-container-rules">
          <h1>Regras</h1>
          <p>
            Aqui estão algumas regras importantes que você precisa conhecer antes de fazer suas apostas:
          </p>
          <ul>
            <li>Entenda as regras específicas de cada tipo de aposta (vitória, empate, total de gols etc.).</li>
            <li>Aposte apenas o que você pode perder.</li>
            <li>Verifique as odds e como elas são calculadas.</li>
            <li>Mantenha-se informado sobre lesões de jogadores e outras notícias relevantes.</li>
          </ul>
          <p>
            Certifique-se de estar ciente das políticas de apostas responsáveis e de jogar com responsabilidade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;
