//CSS
import './Carrer.css'

//components
import { FaBusinessTime } from 'react-icons/fa'
import Title from '../../components/title/title'
import Text from '../../components/text/Text'

const Carrer = () => {
  return (
    <div className='carrer_container'>
      <Title title="Carreira" icon={<FaBusinessTime />} />
      <ul>
        <li>
          <Text
            title="Tecnodrone Spirit Aircraft" 
            subtitle="Auxiliar Administrativo" 
            year="2022 - Presente"
            paragraph="Empresa voltada à fabricação de drones para topografia e agricultura de precisão. Trabalho como auxiliar administrativo ajudando em demandas de escritório."
          />
        </li>
        <li>
          <Text
            title="Snoutez Pet Shop" 
            subtitle="Empreendedor" 
            year="2021 - 2022"
            paragraph="Na pandemia criei um e-commerce de petshop."
          />
        </li>
        <li>
          <Text
            title="Minhas Licenças (ML)" 
            subtitle="Auxiliar Administrativo" 
            year="2019 - 2021"
            paragraph="Empresa voltada à regularização municipal e ambiental de antenas das operadoras de telecom. Trabalhei como auxiliar administrativo fazendo a regularização das ERBs(Estação Rádio Base) nas prefeituras e outras instituições públicas."
          />
        </li>
        <li>
          <Text
            title="Autônomo" 
            subtitle="Agrimensor" 
            year="2017 - 2019 "
            paragraph="Fazia serviços de topografia e georreferenciamento."
          />
        </li>
        <li>
          <Text
            title="Clemar Engenharia" 
            subtitle="Auxiliar Administrativo" 
            year="2016 - 2017"
            paragraph="Estagiei na área de licenciamento, desenhando projetos de torres de celular (ERB - Estação Rádio Base)."
          />
        </li>
      </ul>
    </div>
  )
}

export default Carrer