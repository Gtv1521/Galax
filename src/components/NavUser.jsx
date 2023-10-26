import React from 'react'
import '../styles/Nabvar.style.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faHouse, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const NavUser = () => {
    return (
        <div>
            <ul className={'Items'}>
                <li>
                    <NavLink className={(status) => status.isActive ? 'active' : 'blue'} id="Item" to='/entrada'>
                        <span className={'icon_nav'}><FontAwesomeIcon icon={faHouse} /></span> Home</NavLink>
                </li>
                <li>
                    <NavLink className={(status) => status.isActive ? 'active' : 'blue'} id="Item" to='/perfil'>
                        <span className={'icon_nav'}><FontAwesomeIcon icon={faUserPlus} /></span> Perfil</NavLink>
                </li>
                <li>
                    <NavLink className={(status) => status.isActive ? 'active' : 'blue'} id="Item" to='/'>
                        <span className={'icon_nav'}><FontAwesomeIcon icon={faArrowRightFromBracket} /></span> Log Out</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavUser