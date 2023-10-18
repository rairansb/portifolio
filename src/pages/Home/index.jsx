import { PageArea } from './styled';
import { TypeAnimation } from 'react-type-animation';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as Redirect } from 'react-router-dom';

import { PageContainer, Template } from '../../components/MainComponents';
import { FaDownload } from 'react-icons/fa6';

import MotionDev from '../../components/Motions';

export default function Home() {
  return (
    <Template>
      <PageContainer>
        <PageArea style={{ color: '#fff' }}>
          <section className="presentation">
            <div className="hero">
              <h1>
                <span>OLÁ, SEJA BEM-VINDO(A)</span>
              </h1>
              <h2>ME CHAMO</h2>
              <div className="name">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    'Rairan S. Barbosa',
                    2000,
                    'Desenvolvedor Web',
                    2000,
                    'Node.Js e React.js',
                    2000,
                  ]}
                  speed={200}
                  style={{ fontSize: '50px' }}
                  repeat={Infinity}
                />
              </div>
              <div className="function">
                <p>
                  Sou um desenvolvedor Full Stack que ama criar coisas para a
                  web. Atualmente trabalho como freelancer e transformo ideias
                  em sites e aplicações web.
                </p>

                <div>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                  >
                    Fale comigo
                  </Link>
                  <span>ou</span>
                  <Redirect
                    to="https://drive.google.com/file/d/1RBDBgKUEy9bJeZUfgf2FZZAEb1z8kCgk/view?usp=sharing"
                    target="_blank"
                    className="cv"
                  >
                    <FaDownload style={{ marginRight: 5 }} />
                    Baixe meu CV
                  </Redirect>
                </div>
              </div>
            </div>
          </section>

          <section className="iconsArea">
            <MotionDev />
          </section>
        </PageArea>
      </PageContainer>
    </Template>
  );
}
