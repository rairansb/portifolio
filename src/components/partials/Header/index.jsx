import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { HeaderArea } from './styled';

export default class Header extends Component {
  render() {
    return (
      <HeaderArea style={{}}>
        <div className="container">
          <div className="logo">
            <Link to="#">
              <span className="logoL">R</span>
              <span className="logoL">S</span>
              <span className="logoL">B</span>
              <span className="logoL">-</span>
              <span className="logoL">D</span>
              <span className="logoL">E</span>
              <span className="logoL">V</span>
            </Link>
          </div>
          <nav>
            <ul>
              <>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                  >
                    Sobre
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="projetcts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                  >
                    Projetos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                  >
                    Habilidades
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                  >
                    Contato
                  </Link>
                </li>
              </>
            </ul>
          </nav>
        </div>
      </HeaderArea>
    );
  }
}
