//CSS
import './PortfolioReact.css'

//components
import { FaReact } from 'react-icons/fa'
import Text from '../../components/text/Text'
import Title from '../../components/title/title'

const PortfolioReact = () => {
  return (
    <div id='react_container'>
      <Title title="Portfólio React" icon={<FaReact />} />
      <Text 
        title="ReactGram" 
        subtitle="HTML5 | CSS3 | JavaScript | MongoDB | Express.js | React.js | Node.js" 
      />
      <div id="box_container"></div>
    </div>
  )
}

export default PortfolioReact