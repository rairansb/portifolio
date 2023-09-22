import { HiCommandLine, HiComputerDesktop } from 'react-icons/hi2';
import { Service } from './styled';
export default function Services() {
  const services = [
    {
      title: 'Web',
      description:
        'Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js, Next.js, HTML5 e CSS3.',
      icon: <HiComputerDesktop style={{ width: 40, height: 40 }} />,
    },
    {
      title: 'Sistemas',
      description: 'Desenvolvimento de sistemas e APIs REST com Node.js.',
      icon: <HiCommandLine style={{ width: 40, height: 40 }} />,
    },
  ];

  return (
    <Service>
      <div className="serviceTitle">
        <p>O que faço de melhor</p>
        <h2>
          <span>Meus </span>
          <span>Serviços</span>
        </h2>
      </div>

      <div className="cards">
        {services.map((service, index) => (
          <div className="card" key={`service-${index}`}>
            <div>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </Service>
  );
}
