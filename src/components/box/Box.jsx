//CSS
import './Box.css'

//Components
import { Link } from 'react-router-dom'

const Box = ({ title, subtitle, preview, id }) => {
  return (
    <div id='box_container'>
        <div className="header">
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
        <div className='preview'>
            <p>{preview}</p>
        </div>
        <div className="buttons">
            <button>
                <Link to={`/projects/${id}`}>Saiba Mais</Link>
            </button>
        </div>
    </div>
  )
}

export default Box