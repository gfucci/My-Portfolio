//CSS
import './Carrer.css'

//components
import { FaBusinessTime } from 'react-icons/fa'
import Title from '../../components/title/title'

const Carrer = () => {
  return (
    <div>
      <Title title="Carreira" icon={<FaBusinessTime />} />
      <div className='carrer_description'>
        <h3>Clemar Engenharia</h3>
        <span>Estagiário | 2016 - 2017</span>
        <p>Estagiei na área de licenciamento, desenhando projetos de torres de celular (ERB - Estação Rádio Base)</p>
      </div>
      <div className='carrer_description'>
        <h3>Ipsum</h3>
        <span>Ipsum | Lorem</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam veritatis voluptate autem inventore quis illo eum eos numquam molestiae quo, enim a, expedita voluptatibus placeat mollitia quae cupiditate sed ipsa!</p>
      </div>
      <div className='carrer_description'>
        <h3>Ipsum</h3>
        <span>Ipsum | Lorem</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam veritatis voluptate autem inventore quis illo eum eos numquam molestiae quo, enim a, expedita voluptatibus placeat mollitia quae cupiditate sed ipsa!</p>
      </div>
      <div className='carrer_description'>
        <h3>Ipsum</h3>
        <span>Ipsum | Lorem</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam veritatis voluptate autem inventore quis illo eum eos numquam molestiae quo, enim a, expedita voluptatibus placeat mollitia quae cupiditate sed ipsa!</p>
      </div>
    </div>
  )
}

export default Carrer