import { faEllipsisVertical, faPenToSquare, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Newlbum from './Newlbum'
import Alert from './Alert'
import '../styles/index.scss'

const Config = ({ album, setEstadoBtn, estadoBtn, index, setAlbumActivo }) => {

    const [estado, setEstado] = useState(false)
    const [borrar, setBorrar] = useState(false)
    const [configurar, setConfigurar] = useState(true)

    return (
        <button
            onClick={() => {
                setEstadoBtn(index)
                setAlbumActivo(album.id_album)
            }}
            className={`boton_album ${estadoBtn === index ? 'btn__activo' : ''}`}
        >
            <div className={'config'} >
                {
                    configurar && <button className='boton--config' onClick={() => setConfigurar(false)}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                }

            </div>
            {
                configurar === false &&
                <div className={'btn--config__album'}>
                    <ul className='items'>
                        <li>
                            <button className='item' onClick={() => { setBorrar(true); setConfigurar(true) }}>
                                <span><FontAwesomeIcon icon={faTrash} /></span>
                                <p>Borrar</p>
                            </button>
                        </li>
                        <li>
                            <button className='item' onClick={() => { setEstado(true); setConfigurar(true) }}>
                                <span><FontAwesomeIcon icon={faPenToSquare} /></span>
                                <p>Editar</p>
                            </button>
                        </li>
                        <li>
                            <div className={'btn__close-caja'}>
                                <button className={`btn__close ${configurar ? '' : 'btn__activo'}`} onClick={() => setConfigurar(true)}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            }
            <Newlbum idAlbum={album.id_album} estado={estado} setEstado={setEstado} nombre={album.nombre_album} />
            {
                borrar &&
                <Alert
                    mensaje={`¿Esta seguro de eliminar este album `}
                    nombre={album.nombre_album}
                    aviso='Si elimina el album elimina todas las imagenes que contenga'
                    setBorrar={setBorrar}
                    id={album.id_album}
                    ruta='deleteAlbum'
                />
            }
        </button>
    )
}

export default Config