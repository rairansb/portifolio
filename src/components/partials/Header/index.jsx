import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';

const Header = () => {
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logo-1">L</span>
            <span className="logo-2">O</span>
            <span className="logo-3">J</span>
            <span className="logo-4">A</span>
          </Link>
        </div>
        <nav>
          <ul>
            <>
              <li>
                <Link to="/sobre">Projetos</Link>
              </li>
              <li>
                <Link to="/planos">Habilidades</Link>
              </li>
              <li>
                <Link to="/velocidade">Sobre</Link>
              </li>
              <li>
                <Link to="/Cliente">Contato</Link>
              </li>
              <li>
                <button>B</button>
                <button>W</button>
              </li>
            </>
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
};

export default Header;
