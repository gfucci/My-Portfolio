//CSS
import './PortfolioSites.css'

//components
import { FaHtml5 } from 'react-icons/fa'
import Title from '../../components/title/title'
import Box from '../../components/box/Box'
import { v4 as uuidv4 } from 'uuid'

const PortfolioSites = () => {
  return (
    <div>
      <Title title="Portfólio Sites Estáticos" icon={<FaHtml5 />} />
      <div className="boxes_container">
        <Box
          title="Clone Whats App Web"
          subtitle="HTML5 | CSS3"
          preview="Um clone estático da home page do Wpp WEB."
          id={uuidv4()}
          className='test'
        />
        <Box
          title="Clone Instagram Home"
          subtitle="HTML5 | CSS3 | Responsividade"
          preview="Clone do intagram com responsividade."
          id={uuidv4()}
        />
        <Box
          title="Clone Google Home"
          subtitle="HTML5 | CSS3"
          preview="Clone da home page do google."
          id={uuidv4()}
        />
        <Box
          title="Clone Google Search"
          subtitle="HTML5 | CSS3"
          preview="Clone da search page do google."
          id={uuidv4()}
        />
        <Box
          title="HDC Host"
          subtitle="HTML5 | CSS3 | Responsividade"
          preview="Institutional Page para serviços de hospedagem com responsividade."
          id={uuidv4()}
        />
        <Box
          title="Doceria"
          subtitle="HTML5 | CSS3"
          preview="Site de uma confeitaria com menu lateral."
          id={uuidv4()}
        />
        <Box
          title="Visit Card Page"
          subtitle="HTML5 | CSS3"
          preview="One Page com contato e formulário."
          id={uuidv4()}
        />
        <Box
          title="Institutional Page"
          subtitle="HTML5 | CSS3"
          preview="Página institucional genérica."
          id={uuidv4()}
        />
      </div>
    </div>
  )
}

export default PortfolioSites