import React from 'react';
import {PageArea} from './styled';
import { PageContainer } from '../../components/MainComponents';


import {Slideshow} from '../../components/slids';

const Page = () => {
  return (
    <PageContainer>
     <PageArea>
       <div>
         <h1>SOBRE MIM</h1>
         <p>Tenho mais de 10 Projetos e o proximo pode ser o seu</p>
       </div>
         <div className="main">

           <div className="aboutImg">
            <div>
             <Slideshow />
             </div>
             <div className='dados'>
             <h2>Ola!</h2>
             <p>meu nome é <span>Rairan S. Barbosa</span></p>
             <p>Idade: <span>30 anos</span></p>
             <p>Forma de trabalho: <span>Desenvolvedor Web</span></p>
             </div>

         </div>

         <div className="about"> 
           <p>Olá! Sou apaixonado por construir e manter conexões, tanto no mundo digital quanto no mundo real. Durante meus 4 anos como técnico de redes e suporte em um provedor de internet, e 1 ano e meio como Técnico de suporte em TI, aprendi a importância da conexão, não apenas entre dispositivos, mas entre pessoas. Durante esse tempo, também comecei a explorar minha paixão por JavaScript, TypeScript, Node.js e React.js que me permite criar soluções eficientes e modernas para os desafios tecnológicos que enfrentamos. Além disso, minha compreensão de bancos de dados como PostgreSQL e MongoDB me ajuda a otimizar a coleta e o armazenamento de dados.Com isso posso atender uma gama completa de serviços, do front-end ao back-end com banco de dados e sistemas.
          </p>
        </div>
      </div>
    </PageArea>
  </PageContainer>)
};

export default Page;
