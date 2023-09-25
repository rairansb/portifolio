import { PageArea } from './styled';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

export default function Projects() {
  const projects = [
    {
      title: 'Projeto 1',
      description: 'Descrição do projeto 1',
      image:
        'https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1605&q=80',
      link: '#',
      colSpan: 'col-span-1',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      link: '#',
      colSpan: 'col-span-1 md:col-span-2',
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do projeto 3',
      image:
        'https://media.istockphoto.com/id/1305995602/photo/responsive-floating-responsive-design.jpg?b=1&s=170667a&w=0&k=20&c=uFqBz27v_B0UxcslnvZxd9c0D9eJAef7veRZf6b-v-A=',
      link: '#',
      colSpan: 'col-span-1',
    },
    {
      title: 'Projeto 4',
      description: 'Descrição do projeto 4',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      link: '#',
      colSpan: 'col-span-1',
    },
    {
      title: 'Projeto 5',
      description: 'Descrição do projeto 5',
      image:
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      link: '#',
      colSpan: 'col-span-1',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      link: '#',
      colSpan: 'col-span-1 md:col-span-2',
    },
  ];

  return (
    <>
      <PageArea>
        <div className="area">
          <div className="title">
            <h2>Projetos</h2>
            <p>
              Alguns dos projetos pessoais e que já realizei ao longo da minha
              trajetória como programador.
            </p>
          </div>

          <div className="cards">
            {projects.map((project, index) => (
              <div key={index} className="card">
                <img src={project.image} alt="" />
                <div className="detalhes">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowTopRightOnSquare />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageArea>
    </>
  );
}
