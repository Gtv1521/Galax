import React from 'react'
import '../styles/Nabvar.style.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons'

const NavInicio = () => {
    return (
        <div>
            <ul className={'Items'}>
                <li>
                    <NavLink className={(status) => status.isActive ? 'active' : 'blue'} id="Item" to='/sigin'>
                        <span className={'icon_nav'}><FontAwesomeIcon icon={faArrowRightToBracket} /></span> Sing In</NavLink>
                </li>
                <li>
                    <NavLink className={(status) => status.isActive ? 'active' : 'blue'} id="Item" to='/login'>
                        <span className={'icon_nav'}><FontAwesomeIcon icon={faArrowUpFromBracket} /></span> Log In</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavInicio