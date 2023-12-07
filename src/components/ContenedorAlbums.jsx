import React, { useState } from 'react'
import '../styles/Albums.style.css'
import Config from './Config'

const ContenedorAlbums = ({ albums, estado, setAlbumActivo }) => {

  const [estadoBtn, setEstadoBtn] = useState(0)

  return (
    <>
      <div className={`caja_albunes ${estado ? '' : 'activada'}`}>
        {
          albums?.data.message ? <div className={'message'}>{albums.data.message}</div>
            :
            albums?.data.map((album , index) =>
             <Config setAlbumActivo={setAlbumActivo} key={album.id_album} album={album} setEstadoBtn={setEstadoBtn} estadoBtn={estadoBtn} index={index}/>
            )
        }
      </div>
    </>
  )
}

export default ContenedorAlbums