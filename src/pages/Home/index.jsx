import { PageArea } from './styled';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';


import { PageContainer, Template } from '../../components/MainComponents';
import { FaDownload, FaGithub, FaLinkedin, FaWhatsapp,FaInstagram} from 'react-icons/fa6';
import curriculo from '../../assets/curriculo.pdf';
import MotionDev from '../../components/Motions';


const Page = () => {
  return (
    <Template>
      <PageContainer>
        <PageArea style={{color: '#fff'}}>
        <section className='presentation'>
          <div className='hero'>
            <h1>
             <span>OLÁ, SEJA BEM-VINDO(A)</span> 
            </h1>
            <h2 >
              ME CHAMO
            </h2>
          <div className='name'>
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
            <div className='function'>
             <p >
              Sou um desenvolvedor Full Stack que ama criar coisas para a web.
              Atualmente trabalho como freelancer e transformo ideias em sites e
              aplicações web.
            </p> 

            <div >
              <Link
                href="#contact"
              >
                Fale comigo
              </Link>
              <span>ou</span>
              <Link
                href={curriculo}
                target="_blank"
                className='cv'
              >
                <FaDownload />
                Baixe meu CV
              </Link>
            </div>
          </div>
          </div>
        </section>

        <section className='iconsArea' >
            <MotionDev />
            <div className='icons'>
            <Link><FaGithub/></Link>
            <Link><FaLinkedin/></Link>
            <Link> <FaWhatsapp/></Link>
            <Link><FaInstagram/></Link>
            
            
           
           
            </div>
           
        </section>
        </PageArea>
      </PageContainer>
    </Template>
  );
};

export default Page;
