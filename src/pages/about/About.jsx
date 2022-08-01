//CSS
import './About.css'

//components
import Title from '../../components/title/title'
import ProgressBar from '../../components/progressBar/ProgressBar'

const About = () => {
  return (
    <div id='about_container'>
      <Title title='Gabriel Amaral Fucci' />
      <p>Sou técnico agrimensor, por falta de identificação com a área, resolvi fazer transição de carreira para área de TI. Hoje o assunto que mais domino é programação web em front-end. Estou estudando com foco em virar full stack.</p>
      <ul>
        <li>
          <ProgressBar 
            technology="Lógica de Programação"
            percent={100}
          />
        </li>
        <li>
          <ProgressBar 
            technology="HTML"
            percent={100}
          />
        </li>
        <li>
          <ProgressBar 
            technology="CSS3"
            percent={75}
          />
        </li>
        <li>
          <ProgressBar 
            technology="Git / GitHub"
            percent={90}
          />
        </li>
        <li>
          <ProgressBar 
            technology="JavaScript"
            percent={70}
          />
        </li>
        <li>
          <ProgressBar 
            technology="React.js"
            percent={85}
          />
        </li>
        <li>
          <ProgressBar 
            technology="Redux"
            percent={35}
          />
        </li>
        <li>
          <ProgressBar 
            technology="TypeScript"
            percent={35}
          />
        </li>
        <li>
          <ProgressBar 
            technology="Firebase"
            percent={25}
          />
        </li>
        <li>
          <ProgressBar 
            technology="Node.js"
            percent={25}
          />
        </li>
        <li>
          <ProgressBar 
            technology="Express.js"
            percent={15}
          />
        </li>
        <li>
          <ProgressBar 
            technology="MongoDB"
            percent={15}
          />
        </li>
        <li>
          <ProgressBar 
            technology="ReactNative"
            percent={10}
          />
        </li>
      </ul> 
    </div>
  )
}

export default About