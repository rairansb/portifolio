import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa6';

export default class Header extends Component {
  render() {
    return (
      <HeaderArea>
        <div className="container">
          <nav className="iconsArea">
            <ul className="icons">
              <>
                <li className="nav-item">
                  <Link to="https://github.com/rairansb" target="blank">
                    <FaGithub />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="https://www.linkedin.com/in/rairan-barbosa/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="https://github.com/rairansb" target="blank">
                    <FaInstagram />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="https://wa.me/5573988150582?text=Ol%C3%A1%21+vim+atrav%C3%A9s+do+seu+portf%C3%B3lio+"
                    target="blank"
                  >
                    <FaWhatsapp />
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
