import React from 'react';
import { FooterArea } from './styled';

const Footer = () => {
  return (
    <FooterArea>
      <div className="containe">
        <p className="flex-grow">
          &copy; {new Date().getFullYear()} &middot; Todos os direitos
          reservados.
        </p>
        <ul>
          <li>
            <a href="#">Termos de uso</a>
          </li>
          <li>&middot;</li>
          <li>
            <a href="#">Política de privacidade</a>
          </li>
        </ul>
      </div>
    </FooterArea>
  );
};

export default Footer;
