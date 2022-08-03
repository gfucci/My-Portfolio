//CSS
import './Box.css'

//components
import { FaStar } from 'react-icons/fa'

const Box = ({ title, subtitle, preview, site, code, id }) => {
  return (
    <div class='box_container' id={id}>
        <div className="header">
            <h3>{title} {id && <FaStar /> }</h3>
            <p>{subtitle}</p>
        </div>
        <div className='preview'>
            <p>{preview}</p>
        </div>
        <div className="buttons">
            <button>
                <a href={`${site}`} target="_blank" rel="noreferrer noopener">Site</a>
            </button>
            <button>
                <a href={`${code}`} target="_blank" rel="noreferrer noopener">GitHub</a>
            </button>
        </div>
    </div>
  )
}

export default Box