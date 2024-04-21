import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import '../styles/Images.style.scss'
import Alert from "./Alert"
import Editar from "./Editar"
import Mostrar from "./Mostrar"

const Images = ({ image, imagenes, index }) => {
  const [activo, setActivo] = useState(false)
  const [menu, setMenu] = useState(false)
  const [editar, setEditar] = useState(false)
  const [borrar, setBorrar] = useState(false)

  let startTime, endTime

  function clicDown() {
    startTime = new Date();
  };

  /*Cuando se deje de hacer clic*/
  function clicUp () {
    endTime = new Date();
    var timeDiff = endTime - startTime; 

    if (timeDiff > 500) {
      setMenu(!menu)
    }
  };

  return (
    <>
      <div className={`btn__image ${activo ? 'okey' : ''}`}
        onDoubleClick={() => setActivo(true)}
        onBlur={() => setActivo(false)}
        onMouseDown={clicDown}
        onMouseUp={clicUp}
        key={image.id_img}
      >
        <div className={'contenido__boton'}>
          <div className={'image-caja'}>
            <img className={'image'} alt='' src={image.url_img} />
          </div>
          {
            menu && <div className={'boton__mod'}>
              <button onClick={() => setEditar(true)} className={'boton--accion'}><span><FontAwesomeIcon icon={faPenToSquare} /></span></button>
              <button onClick={() => setBorrar(true)} className={'boton--accion'}><span><FontAwesomeIcon icon={faTrash} /></span></button>
            </div>
          }
          {
            borrar &&
            <Alert
              mensaje={`¿Esta seguro de eliminar esta imagen`}
              setActivo={setActivo}
              setBorrar={setBorrar}
              setMenu={setMenu}
              id={image.id_img}
              ruta='deleteImage'
            />
          }

          {
            editar &&
            <Editar
              id={image.id_img}
              images={image}
              url={image.url_img}
              setEditar={setEditar}
            />
          }
          {
            activo && <Mostrar setActivo={setActivo} index={index} imagenes={imagenes.data} url={image.url_img} />
          }
        </div>
      </div>
    </>
  )
}

export default Images