import React from 'react'
import { Navigate } from "react-router-dom";
import { useState } from 'react';
import Cookies from 'universal-cookie';
import '../styles/index.scss'
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark, faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import Albums from '../components/Albums';
import FormFoto from '../components/FormFoto';
import { useViewImages } from '../hooks/gets';
import { ImSpinner9 } from 'react-icons/im';
import Images from '../components/Images';
import { useRef } from 'react';
import Titulo from '../components/Titulo';


const Dashboar = () => {

  const cookie = new Cookies();

  let usuario = cookie.get('id');
  let token = cookie.get('token');
  let ruta, id

  if (!token) {
    <Navigate to="/logout" replace={true} />
  }

  const [flecha, setFlecha] = useState(false)
  const [nuevo, setNuevo] = useState(false)
  const [albumActivo, setAlbumActivo] = useState(0)
  const [titulo, setTitulo] = useState('')

  console.log(albumActivo)
  if (albumActivo === 0) {
    ruta = 'verImagesId'
    id = usuario
  } else {
    ruta = 'verAllImagenesAlbum'
    id = albumActivo
  }
  const listRef = useRef()

  const { data: imagenes, isPending, isError } = useViewImages({ id, ruta })
  if (isError) {
    window.location = '/logout';
  }
  return (
    <>
      <div className='contenedor'>
        {
          flecha && <Albums setTitulo={setTitulo} setAlbumActivo={setAlbumActivo} images={imagenes} />
        }
        <div className={`contenedor__imagenes ${flecha ? '' : 'activo'}`}>
          <div className={'contenedor_titulo'}>

            {flecha ? <FontAwesomeIcon onClick={() => setFlecha(false)} className={'icono'} icon={faCircleChevronLeft} />
              : <FontAwesomeIcon className={'icono'} onClick={() => setFlecha(true)} icon={faCircleChevronRight} />}

            {albumActivo === 0 ? <h1 className={'titulo'}>Todo</h1> : <Titulo titulo={titulo} />}

            <FontAwesomeIcon className={'icono_add'} icon={faMagnifyingGlass} />
            <FontAwesomeIcon onClick={() => setNuevo(true)} className={'icono_add'} icon={faSquarePlus} />
          </div>
          {
            isPending ? <span><ImSpinner9 className={'spinner'} /></span> :
              imagenes?.data.message ? <div className={'message'}>{imagenes.data.message}</div>
                :
                <ul ref={listRef} className={`imagenes ${flecha ? '' : 'activo'}`}>
                  {
                    imagenes?.data.map((image, idx) =>
                      <Images key={image.id_img} index={idx} imagenes={imagenes} image={image} />
                    )
                  }
                </ul>
          }
        </div>
      </div>
      <div>
        {
          nuevo &&
          <div className={'mostrar_add_imagen'}>
            <div className={'contenedor_titulo'}>
              <h1 className={'titulo'}>Agregar</h1>
              <FontAwesomeIcon className={'cerrar'} onClick={() => setNuevo(false)} icon={faCircleXmark} />
            </div>
            <FormFoto />
          </div>
        }
      </div>
      <Footer />
    </>
  )
}

export default Dashboar  