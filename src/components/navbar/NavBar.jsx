//CSS
import './NavBar.css'

//components
import { NavLink } from 'react-router-dom'
import perfil from '../../assets/img/perfil.jpeg'

const NavBar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar_container">
            <nav>
                <NavLink to="/">
                    <div className="images"></div>
                </NavLink>
                <ul>
                    <li>
                        <NavLink to="/">
                            Sobre Mim
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="education">
                            Formação
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="carrer">
                            Carreira
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="portfolioreact">
                            Portfólio React
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="portfoliosites">
                            Portfólio Sites Estáticos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="certifications">
                            Certificações
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default NavBar