//CSS
import './PortfolioReact.css'

//components
import { FaReact } from 'react-icons/fa'
import Title from '../../components/title/title'
import Box from '../../components/box/Box'
import { v4 as uuidv4 } from 'uuid'

const PortfolioReact = () => {
  return (
    <div id='react_container'>
      <Title title="Portfólio React" icon={<FaReact />} />
      <div className="boxes_container">
        <Box
          title="ReactGram"
          subtitle="MERN Project"
          preview="Rede social para compartilhar fotos"
          id={uuidv4()}
        />
        <Box
          title="React Blog"
          subtitle="React.js | Firebase"
          preview="Blog feito em react e firebase."
          id={uuidv4()}
        />
        <Box
          title="React Product Manager"
          subtitle="React.js | Firebase"
          preview="Mini App para gerenciar produtos com firebase."
          id={uuidv4()}
        />
        <Box
          title="React Movie Libs"
          subtitle="React.js | public API"
          preview="Site com informações de filmes (com API do TMDB)."
          id={uuidv4()}
        />
        <Box
          title="React To do List"
          subtitle="React.js | TypeScript"
          preview="Mini app do estilo To do List com TypeScript."
          id={uuidv4()}
        />
        <Box
          title="React Secret Word"
          subtitle="React.js"
          preview="Jogo de adivinhação de palavras."
          id={uuidv4()}
        />
      </div>
    </div>
  )
}

export default PortfolioReact