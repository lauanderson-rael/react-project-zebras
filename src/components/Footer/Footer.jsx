
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className='img'>
       <img src="images/logo02.png" alt="logo" width="100px"/>
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <h3>Links Rápidos</h3>
          <ul>
            <li></li>
            <li><a className='link' href="#">Início</a></li>
            <li><a className='link' href="#">Resultados</a></li>
            <li><a className='link' href="#">Contato</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Redes Sociais</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contato</h3>
          <p>Endereço: Rua Exemplo, 123<br />Telefone: (00) 1234-5678<br />Email: contato@exemplo.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Zebras. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
