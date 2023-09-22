import React from 'react';
import { PageArea } from './styled';
import { PageContainer, Template } from '../../components/MainComponents';
import Services from '../../components/partials/Cards';

import Perfil from '../../assets/images/perfil.jpg';

const Page = () => {
  return (
    <Template>
      <PageContainer>
        <PageArea>
          <div>
            <h1>SOBRE MIM</h1>
            <p>
              Sou apaixonado por construir e manter conexões, tanto no mundo
              digital quanto no mundo real.
            </p>
            <p>Tenho mais de 10 Projetos e o proximo pode ser o seu.</p>
          </div>
          <div className="main">
            <div className="aboutImg">
              <img src={Perfil} alt="" />
              <div className="dados">
                <h2>Ola!</h2>
                <p>
                  Meu nome é <span>Rairan S. Barbosa</span>
                </p>
                <p>
                  Tenho <span>30 anos</span>
                </p>
                <p>
                  sou um <span>Desenvolvedor Web</span>
                </p>
              </div>
            </div>

            <div className="about">
              <p>
                Trabalho na área de TI a mais de 10 anos Durante esse tempo,
                também comecei a explorar minha paixão por JavaScript, Node.js e
                React.js que me permite criar soluções eficientes e modernas.
                Além disso, minha compreensão de bancos de dados como PostgreSQL
                e MongoDB me ajuda a otimizar a coleta e o armazenamento de
                dados.Com isso posso atender uma gama completa de serviços, do
                front-end ao back-end com banco de dados e APIs.
              </p>
            </div>
          </div>
          <div className="servicos">
            <Services />
          </div>
        </PageArea>
      </PageContainer>
    </Template>
  );
};

export default Page;
