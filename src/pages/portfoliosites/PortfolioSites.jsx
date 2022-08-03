//CSS
import './PortfolioSites.css'

//components
import { FaHtml5 } from 'react-icons/fa'
import Title from '../../components/title/Title'
import Box from '../../components/box/Box'

const PortfolioSites = () => {
  return (
    <div>
      <Title title="Portfólio Sites Estáticos" icon={<FaHtml5 />} />
      <div className="boxes_container">
        <Box
          title="Clone Wpp Web"
          subtitle="HTML5 | CSS3"
          preview="Um clone estático da home page do Whats App WEB."
          site="https://site-wpp-web.vercel.app/"
          code="https://github.com/gfucci/Site-wpp-web"
          id="special_box"
        />
        <Box
          title="Clone Instagram Home"
          subtitle="HTML5 | CSS3 | Responsividade"
          preview="Clone do intagram com responsividade."
          site="https://site-clone-home-instagram.vercel.app/"
          code="https://github.com/gfucci/site-clone-HomeInstagram"
        />
        <Box
          title="Clone Google Home"
          subtitle="HTML5 | CSS3"
          preview="Clone da home page do google."
          site="https://clone-google-initial-page.vercel.app/"
          code="https://github.com/gfucci/clone-google-initial-page"
        />
        <Box
          title="Clone Google Search"
          subtitle="HTML5 | CSS3"
          preview="Clone da search page do google."
          site="https://site-clone-google-search.vercel.app/"
          code="https://github.com/gfucci/site-clone-GoogleSearch"
        />
        <Box
          title="HDC Host"
          subtitle="HTML5 | CSS3 | Responsividade"
          preview="Institutional Page para serviços de hospedagem com responsividade."
          site="https://site-hdc-host.vercel.app/"
          code="https://github.com/gfucci/Site-HDC-host"
        />
        <Box
          title="Doceria"
          subtitle="HTML5 | CSS3"
          preview="Site de uma confeitaria com menu lateral."
          site="https://site-doceria-sage.vercel.app/"
          code="https://github.com/gfucci/Site-Doceria"
        />
        <Box
          title="Visit Card Page"
          subtitle="HTML5 | CSS3"
          preview="One Page com contato e formulário."
          site="https://site-contato.vercel.app/"
          code="https://github.com/gfucci/site-contato"
        />
        <Box
          title="Institutional Page"
          subtitle="HTML5 | CSS3"
          preview="Página institucional genérica."
          site="https://site-institucional-estatico.vercel.app/"
          code="https://github.com/gfucci/Site-institucional_Estatico"
        />
      </div>
    </div>
  )
}

export default PortfolioSites