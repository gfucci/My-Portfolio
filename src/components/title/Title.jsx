//CSS
import './Title.css'

const Title = ({title, icon}) => {
  return (
    <div className='category_title'>
      <h2 className='icon_title'>{icon}</h2>
      <h2>{title}</h2>
    </div>
  )
}

export default Title