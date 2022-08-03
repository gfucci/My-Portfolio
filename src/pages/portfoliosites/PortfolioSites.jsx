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
          title="React Blog"
          subtitle="React.js | Firebase"
          preview="Blog feito em react e firebase."
          id={uuidv4()}
          className='test'
        />
        <Box
          title="React Blog"
          subtitle="React.js | Firebase"
          preview="Blog feito em react e firebase."
          id={uuidv4()}
        />
        <Box
          title="React Blog"
          subtitle="React.js | Firebase"
          preview="Blog feito em react e firebase."
          id={uuidv4()}
        />
        <Box
          title="React Blog"
          subtitle="React.js | Firebase"
          preview="Blog feito em react e firebase."
          id={uuidv4()}
        />
        <Box
          title="React Blog"
          subtitle="React.js | Firebase"
          preview="Blog feito em react e firebase."
          id={uuidv4()}
        />
        <Box
          title="React Blog"
          subtitle="React.js | Firebase"
          preview="Blog feito em react e firebase."
          id={uuidv4()}
        />
        <Box
          title="React Blog"
          subtitle="React.js | Firebase"
          preview="Blog feito em react e firebase."
          id={uuidv4()}
        />
        <Box
          title="React Blog"
          subtitle="React.js | Firebase"
          preview="Blog feito em react e firebase."
          id={uuidv4()}
        />
      </div>
    </div>
  )
}

export default PortfolioSites