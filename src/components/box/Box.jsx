//CSS
import './Box.css'

//Components
import { Link } from 'react-router-dom'

const Box = ({ title, subtitle, preview }) => {
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
                <a href="">Site</a>
            </button>
            <button>
                <a href="">GitHub</a>
            </button>
        </div>
    </div>
  )
}

export default Box