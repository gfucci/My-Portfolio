//CSS
import './Certifications.css'

//components
import { TbCertificate } from 'react-icons/tb'
import Title from '../../components/title/title'
import Text from '../../components/text/Text'

const Certifications = () => {
  return (
    <div className='certifications_container'>
      <Title title="Certificações" icon={<TbCertificate />} />
      <ul>
        <li>
          <Text 
            title="React do Zero a Maestria (c/hooks, router, API, Projetos)"
            links="https://www.udemy.com/certificate/UC-f0ad2ee2-7a37-4135-b3e1-a986a5458d5f/"
          />
        </li>
        <li>
          <Text 
            title="HTML5 e CSS3: Técnicas Avançadas (Com Flexbox e 5 Projetos)"
            links="https://www.udemy.com/certificate/UC-0e2b05b2-1198-4270-9a07-a046dc72049d/"
          />
        </li>
        <li>
          <Text 
            title="HTML e CSS: O início (incluindo 5 projetos)"
            links="https://www.udemy.com/certificate/UC-22639c8a-da73-4e4b-9e4c-c3dbe91205a4/"
          />
        </li>
        <li>
          <Text 
            title="Git e GitHub focado em PullRequest"
            links="https://www.dio.me/certificate/BC3C1DA1"
          />
        </li>
        <li>
          <Text 
            title="Trabalhando com Branches no GitHub"
            links="https://www.dio.me/certificate/CA54A640"
          />
        </li>
        <li>
          <Text 
            title="Introdução a Git e ao GitHub"
            links="https://www.dio.me/certificate/57711BCB"
          />
        </li>
      </ul>
    </div>
  )
}

export default Certifications