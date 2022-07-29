//CSS
import styles from './NavBar.module.css'
import './NavBar.css'
//components
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar_container">
            <nav>
                {/*<NavLink to="/">
                    <img src="" alt="" />
                </NavLink>*/}
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
                            Portfólio Site Estático
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