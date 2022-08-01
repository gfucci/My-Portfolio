//CSS
import './Education.css'

//components
import Title from "../../components/title/title"
import { MdSchool } from 'react-icons/md' 
import Text from '../../components/text/Text'

const Education = () => {
  return (
    <div className='education_container'>
      <Title 
        title='Formação' 
        icon={<MdSchool />} 
      />
      <ul>
        <li>
          <Text 
            title="Sistemas de Informação" 
            subtitle="Estácio de Sá" 
            year="2022 - 2025" 
            study="Cursando"
            graduate="Formado"
          />
        </li>
        <li>
          <Text 
            title="Técnico em Agrimensura" 
            subtitle="IFSC - Instituto Federal de Santa Catarina" 
            year="2016 - 2018" 
            graduate="Formado"
          />
        </li>
        <li>
          <Text 
            title="Economia" 
            subtitle="UDESC - Universidade do Estado de Santa Catarina" 
            year="2019 - 2022" 
            study="Trancado"
            graduate="Incompleto"
          />
        </li>
      </ul>
    </div>
  )
}

export default Education