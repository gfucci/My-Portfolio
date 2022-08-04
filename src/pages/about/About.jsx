//CSS
import './About.css'

//components
import Title from '../../components/title/Title'
import ProgressBar from '../../components/progressBar/ProgressBar'
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import pdf from '../../assets/pdf/CURRÍCULO_GABRIEL_FUCCI.pdf'
import Box from '../../components/box/Box'

const About = () => {
  return (
    <div id='about_container'>
      <Title title='Gabriel Amaral Fucci' />
      <p>Olá, sou um programador! Hoje o assunto que mais domino é programação web front-end, e estou estudando com foco em virar full stack. Além de TI, sou formado em agrimensura e tenho conhecimentos de economia.</p>
      <h3>Contato</h3>
      <div id="contacts">
        <div id='contact1'>
          <ul>
            <li>
              <a href="https://api.whatsapp.com/send?phone=5548991316103" target="_blank" rel="noreferrer noopener">
                <FaWhatsapp />
                <span>(48) 99131-6103</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/gfucci" target="_blank" rel="noreferrer noopener">
                <FaGithub />
                <span>github.com/gfucci</span>
              </a>
            </li>
          </ul>
        </div>
        <div id='contact2'>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/gabrielfucci/" target="_blank" rel="noreferrer noopener">
                <FaLinkedin />
                <span>linkedin.com/gabrielfucci</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gabrielfucci_/" target="_blank" rel="noreferrer noopener">
                <FaInstagram />
                <span>instagram.com/gabrielfucci_</span>
              </a>
            </li>
          </ul>
        </div>
        <div id='contact3'>
          <ul>
            <li>
              <a href="https://goo.gl/maps/1n1kP4idD1uekdtM7" target="_blank" rel="noreferrer noopener">
                <MdLocationOn />
                <span>Florianópolis, SC.</span>
              </a>
            </li>
            <li>
              <a href="mailto: gfucci_2005@hotmail.com" target="_blank" rel="noreferrer noopener">
                <MdEmail />
                <span>gfucci_2005@hotmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="skills_container">
        <div id="front_skills">
          <h3>Habilidade Front-End</h3>
          <ul>
            <li>
              <ProgressBar
                technology="HTML"
                percent={100}
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
                technology="CSS3"
                percent={75}
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
          </ul>
        </div>
        <div id="back_skills">
          <h3>Habilidade Back-End</h3>
          <ul>
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
          </ul>
        </div>
        <div id="others_skills">
          <h3>Outros</h3>
          <ul>
            <li>
              <ProgressBar 
                technology="Lógica de Programação"
                percent={100}
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
                technology="ReactNative"
                percent={10}
              />
            </li>
          </ul>
        </div>
        <div id="language_skills">
          <h3>Idiomas</h3>
          <ul>
            <li>
              <ProgressBar
                technology="Português"
                percent={100}
              />
            </li>
            <li>
              <ProgressBar
                technology="Inglês"
                percent={25}
              />
            </li>

          </ul>
        </div>
      </div>
      {/*<h3>Competências</h3>
      <h3>Links</h3>
      <button>
        <a href="https://github.com/gfucci/My-Curriculum" target="_blank" rel="noreferrer noopener">Código do Portfólio</a>
      </button>
      <button>
        <a href={pdf} download>PDF deste portfólio</a>
      </button>*/}
    </div>
  )
}

export default About