import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';

const Header = () => {
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logo-1">R</span>
            <span className="logo-2">S</span>
            <span className="logo-3">B</span>
            <span className="logo-3">-</span>
            <span className="logo-4">D</span>
            <span className="logo-4">E</span>
            <span className="logo-4">V</span>
          </Link>
        </div>
        <nav>
          <ul>
            <>
              <li>
                <Link to="/projects">Projetos</Link>
              </li>
              <li>
                <Link to="/planos">Habilidades</Link>
              </li>
              <li>
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
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
