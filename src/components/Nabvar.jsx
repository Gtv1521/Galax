import { NavLink } from "react-router-dom"
import "../styles/Nabvar.style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import env from 'react-dotenv'
// import axios from "axios"


const Nabvar = () => {
    return (
        <div className={'Navbar'}>
            <div className={'Nav'}>
                <div className={'Logo'}><img src="" alt="" />Logo </div>
                <ul className={'Items'}>
                    <li>
                        <NavLink className={(status) => status.isActive ? 'active' : 'blue'} id="Item" to='/'>
                            <span className={'icon_nav'}><FontAwesomeIcon icon={faHouse} /></span> Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={(status) => status.isActive ? 'active' : 'blue'} id="Item" to='/perfil'>
                            <span className={'icon_nav'}><FontAwesomeIcon icon={faUser} /></span> Perfil</NavLink>
                    </li>
                    <li>
                        <NavLink className={(status) => status.isActive ? 'active' : 'blue'} id="Item" to='/exit'>
                            <span className={'icon_nav'}></span> Exit</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nabvar