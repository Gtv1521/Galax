import React from 'react'
import '../styles/Albums.style.css'

const ContenedorAlbums = (data) => {
  const albums  = data.albums
  const imagenes  = data.images

  function PrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  
  return (
    <>
      <div className={data.estado ? 'caja_albunes_reducida' : 'caja_albunes'}>
        {albums.data.map(album =>
          <button className={'boton_album'} key={album.id_album}>

            <p className={'nombre__album'}>{PrimeraLetra(album.nombre_album)}</p>
          </button>
        )}
      </div>
    </>
  )
}

export default ContenedorAlbums