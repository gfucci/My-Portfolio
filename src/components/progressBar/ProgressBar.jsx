//CSS
import './ProgressBar.css'

function ProgressBar({ percent, technology }) {

  return (
    <div className='progress_container'>
        <label>{technology}</label>
        <div className='progressbar'>
            <div className='progress' style={{width: `${percent}%`}}></div>
        </div>
    </div>  
  )
}

export default ProgressBar