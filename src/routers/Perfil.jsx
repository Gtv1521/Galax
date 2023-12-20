import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/index.scss'
import React from 'react'

const Perfil = () => {
  return (
    <div>
      <div className="perfil">
        <div className="btn_cierre">
          <div className="title">Perfil</div>
          <span className={'icono cerrar'}><FontAwesomeIcon icon={faXmark} /></span>
        </div>
        <div className="caja__perfil">
          <div className="datos__perfil"></div>
          <div className="foto__perfil">
            <img src="https://res.cloudinary.com/djtxchura/image/upload/v1701746495/aplicacionFotos/q55uywzcenecfvanihgx.jpg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil