//CSS
import './PortfolioSites.css'

//components
import { FaHtml5 } from 'react-icons/fa'
import Title from '../../components/title/title'

const PortfolioSites = () => {
  return (
    <div>
      <Title title="Portfólio Sites Estáticos" icon={<FaHtml5 />} />
      <a href="/">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident praesentium dignissimos molestias harum veritatis laborum nam libero nulla vitae eligendi iste quos explicabo ducimus fugiat possimus, obcaecati optio tenetur.</a>
    </div>
  )
}

export default PortfolioSites