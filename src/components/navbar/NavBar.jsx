//CSS
import './NavBar.css'

//components
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {

    let navigate = useNavigate()

    const handleNavigation = () => {
        navigate("/", { replace: true })
    }

  return (
    <div className="sidebar">
        <div className="sidebar_container">
            <nav>
                <div className="images" onClick={handleNavigation} ></div>
                <ul id='links'>
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
                            Portfólio Sites
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