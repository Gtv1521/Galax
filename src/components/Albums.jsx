import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import FormAlbums from './FormAlbums'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import '../styles/Dashboard.style.css'
import ContenedorAlbums from './ContenedorAlbums'
import Cookies from 'universal-cookie'
import { useViewAlbum } from '../hooks/gets.js'
import { ImSpinner9 } from 'react-icons/im'


const Albums = (images) => {

    const cookie = new Cookies()

    const [album, setAlbum] = useState(false)

    let idUsuario = cookie.get('id')

    const { data: datos, isError, isPending } = useViewAlbum(idUsuario)
    return (
        <>
            <div className={'albums'}>
                <div className={'contenedor_titulo'} >
                    <h1 className={'titulo'}>Albums </h1>
                    <FontAwesomeIcon className={album ? 'add' : 'close'} onClick={() => setAlbum(!album)} icon={faCircleXmark} />
                </div>
                {album && <FormAlbums />}

                {
                    isPending ? <ImSpinner9 className={'spinner'} /> : <div>
                        {isError ? 'error' : <ContenedorAlbums estado={album} albums={datos} images={images} />}
                    </div>
                }

            </div>
        </>
    )
}

export default Albums