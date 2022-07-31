//CSS
import './Education.css'

//components
import Title from "../../components/title/title"
import { MdSchool } from 'react-icons/md' 

const Education = () => {
  return (
    <div>
      <Title title='Formação' icon={<MdSchool />} />
      <div>
        <h3>Sistemas de Informação</h3>
        <p>Estácio de Sá - Campus Florianópolis | 2022 - 2025 | 2° Semestre | Cursando</p>
      </div>
      <div>
        <h3>Técnico em Agrimensura</h3>
        <p>IFSC - Instituto Federal de Santa Catarina | 2016 - 2018 | Formado</p>
      </div>
      <div>
        <h3>Economia</h3>
        <p>UDESC - Universidade do Estado de Santa Catarina | 2019 - 2022 | Trancado</p>
      </div>
    </div>
  )
}

export default Education