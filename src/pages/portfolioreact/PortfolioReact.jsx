//CSS
import './PortfolioReact.css'

//components
import { FaReact } from 'react-icons/fa'
import Title from '../../components/title/Title'
import Box from '../../components/box/Box'

const PortfolioReact = () => {
  return (
    <div id='react_container'>
      <Title title="Portfólio React" icon={<FaReact />} />
      <div className="boxes_container">
        <Box
          title="React Blog"
          subtitle="React.js | Firebase"
          preview="Blog feito em react e firebase."
          site="https://react-blog-gfucci.vercel.app/"
          code="https://github.com/gfucci/react-blog"
          id='special_box'
        />
        <Box
          title="React Product Manager"
          subtitle="React.js | Firebase"
          preview="Mini App para gerenciar produtos com firebase."
          site="https://react-product-manager.vercel.app/"
          code="https://github.com/gfucci/React-product-manager"
        />
        <Box
          title="React Movie Libs"
          subtitle="React.js | public API"
          preview="Site com informações de filmes (com API do TMDB)."
          site="https://react-movie-libs.vercel.app/"
          code="https://github.com/gfucci/react-movie-libs"
        />
        <Box
          title="React To do List"
          subtitle="React.js | TypeScript"
          preview="Mini app do estilo To do List com TypeScript."
          site="https://react-todo-typescript-six.vercel.app/"
          code="https://github.com/gfucci/react-todo-typescript"
        />
        <Box
          title="React Secret Word"
          subtitle="React.js"
          preview="Jogo de adivinhação de palavras."
          site="https://react-secret-word.vercel.app/"
          code="https://github.com/gfucci/react-secret-word"
        />
      </div>
    </div>
  )
}

export default PortfolioReact