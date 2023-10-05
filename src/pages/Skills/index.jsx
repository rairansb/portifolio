import { HiAcademicCap, HiCodeBracketSquare } from 'react-icons/hi2';
import { PageArea } from './styled';

export default function Skills() {
  const educations = [
    {
      name: 'Cursando Tecnologo em Analise e desenvolvimento de sistemas | UNOPAR',
    },
    {
      name: 'Cursando AWS Re/Start | Escola da Nuvem',
    },
    {
      name: 'Curso JavaScript Completo | Danki Code',
    },
    {
      name: 'Curso TypeScript Express | Danki Code',
    },
    {
      name: 'Curso NodeJS | Danki Code',
    },
    {
      name: 'Curso Front-End Completo 2.0 | Danki Code',
    },
    {
      name: 'Curso Banco de Dados | Danki Code',
    },
  ];

  const skills = [
    {
      name: 'HTML5',
      icon: 'images/html.svg',
      level: 95,
    },
    {
      name: 'CSS3',
      icon: 'images/css.svg',
      level: 95,
    },
    {
      name: 'JavaScript',
      icon: 'images/javascript.svg',
      level: 90,
    },
    {
      name: 'TypeScript',
      icon: 'images/typescript.svg',
      level: 50,
    },
    {
      name: 'React.js',
      icon: 'images/react.svg',
      level: 85,
    },
    {
      name: 'Node.js',
      icon: 'images/nodejs.svg',
      level: 70,
    },
    {
      name: 'PostgreSQL',
      icon: 'images/postgres.svg',
      level: 65,
    },
    {
      name: 'MongoDB',
      icon: 'images/mongodb.svg',
      level: 50,
    },
  ];

  return (
    <PageArea>
      <div className="container">
        <div className="title">
          <h2>
            <span>Educação &</span>
            <span>Skills</span>
          </h2>
          <p>
            Full Stack Developer | Node.js | React.js | TypeScript | JavaScript
          </p>
          <div />
        </div>

        <div className="areaCentral">
          <div className="education">
            <h3>
              <HiAcademicCap style={{ width: 50, height: 50 }} />
              Educação
            </h3>

            {educations.map((education, index) => (
              <div key={`education-${index}`} className="cursos">
                {education.name}
              </div>
            ))}
          </div>
          <div className="skills">
            <h3>
              <HiCodeBracketSquare style={{ width: 50, height: 50 }} />
              Skills
            </h3>

            <div className="cards">
              {skills.map((skill, index) => (
                <div key={`skill-${index}`} className="card">
                  <div>
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <div>
                    <h4>{skill.name}</h4>
                    <div className="bgStatusBar">
                      <div
                        className="statusBar"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageArea>
  );
}
