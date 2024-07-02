
import './styles.css';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { BsList } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <header className="cabecalho">
      <img src="images/logo02.png" alt="logo" width="60px" />
      <div className="menu-lateral-direito">

        <div className='button-open' onClick={toggleMenu}><BsList style={{width:'30px' , height: '30px'}}/></div>

        <div className={`menu-lateral ${menuAberto ? 'aberto' : ''}`}>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/rules">Regras</Link></li>
              <li><Link to="/">Sobre</Link></li>

            </ul>
            <div className='button-close' onClick={fecharMenu}><IoMdClose style={{width:'30px' , height: '30px'}}/></div>
        </div>

        {menuAberto && (<div className="overlay" onClick={fecharMenu}></div>)}
      </div>

    </header>
  );
};

export default Header;
