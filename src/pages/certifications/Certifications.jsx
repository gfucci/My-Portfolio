//CSS
import './Certifications.css'

//components
import { TbCertificate } from 'react-icons/tb'
import Title from '../../components/title/Title'
import Text from '../../components/text/Text'

//certifications
const gitCertifications = [
  "https://www.dio.me/certificate/BC3C1DA1", 
  "https://www.dio.me/certificate/CA54A640", 
  "https://www.dio.me/certificate/57711BCB"
] 

const HtmlAndCssCertifications = [
  "https://www.udemy.com/certificate/UC-0e2b05b2-1198-4270-9a07-a046dc72049d/", 
  "https://www.udemy.com/certificate/UC-22639c8a-da73-4e4b-9e4c-c3dbe91205a4/"
] 

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
            title="Linux para Desenvolvedores (c/ terminal, Shell, Apache e +)"
            links="https://www.udemy.com/certificate/UC-3e28dbca-c2f7-4e64-92f3-461b82eb67d0/"
          />
        </li>
        <li>
          <Text 
            title="Certificações HTML5 e CSS3"
            links={HtmlAndCssCertifications}
          />
        </li>
        <li>
          <Text 
            title="Certificações Git"
            links={gitCertifications}
          />
        </li>
      </ul>
    </div>
  )
}

export default Certifications