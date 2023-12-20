import React, { useState } from 'react'
import '../styles/Albums.style.css'
import Config from './Config'
import BtnTodo from './BtnTodo'

const ContenedorAlbums = ({ albums, setTitulo, estado, setAlbumActivo }) => {

  const [estadoBtn, setEstadoBtn] = useState(0)
  const num = albums.data.length + 1
  return (
    <>
      <div className={`caja_albunes ${estado ? '' : 'activada'}`}>

          {
          albums?.data.message ? <div className={'message'}>{albums.data.message}</div>
            :
            albums?.data.map((album, index) =>
              <Config setTitulo={setTitulo} setAlbumActivo={setAlbumActivo} key={album.id_album} album={album} setEstadoBtn={setEstadoBtn} estadoBtn={estadoBtn} index={index} />
            )
        }
        {
          albums.data.length >= 2 && <BtnTodo num={num} setAlbumActivo={setAlbumActivo} setEstadoBtn={setEstadoBtn} estadoBtn={estadoBtn} />
        }
      </div>
    </>
  )
}

export default ContenedorAlbums