import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import '../styles/index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'
const Mostrar = ({ setActivo, imagenes, index }) => {

    const opcion = useRef()
    const vista = useRef()

    const [numero, setNumero] = useState(index)

    useEffect(() => {
        const listNode = opcion.current
        const nodeTwo = vista.current
        const imageActual = listNode.querySelectorAll(".image__muestra")[numero]
        const imageActualVista = nodeTwo.querySelectorAll(".coleccion__muestra")[numero]

        if (imageActual) {
            imageActual.scrollIntoView()
        }
        if (imageActualVista) {
            imageActualVista.scrollIntoView({
                block: "end", behavior: "smooth"
            })
        }
    }, [numero])


    function Comprobar(direccion) {
        if (direccion === "prev") {
            setNumero((num) =>
                numero === 0 ? 0 : num - 1
            )

        } else {
            const ultimoIndex = numero === imagenes.length - 1
            if (!ultimoIndex) {
                setNumero((num) => num + 1)
            }
        }
    }

    function IrAImage(index) {
        setNumero(index)
    }

    return (
        <>
            <div className={"mostrar__images"}>
                <span onClick={() => setActivo(false)} className={'icono cerrar'}><FontAwesomeIcon icon={faXmark} /></span>
                <div className={"main_container"}>
                    {
                        numero !== 0 &&
                        <div
                            onClick={() => Comprobar("prev")} className={'icono prev'}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                    }
                    {
                        numero === imagenes.length - 1 ? '' :
                            <div
                                onClick={() => Comprobar("next")} className={'icono next'}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                    }

                    <div className={"slider_container"}>
                        <div className={"container_images"}>
                            <ul ref={opcion}>
                                {
                                    imagenes.map((item, idx) =>
                                        <li key={item.id_img}>
                                            <img className={`image__muestra`} src={item.url_img} alt="" />
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <ul ref={vista} className={'mostrar__coleccion'}>
                    <div className="image__contendor">
                        {
                            imagenes.map((image, idx) =>
                                <li onClick={() => IrAImage(idx)} className={'image__mostrar'} key={image.id_img}>
                                    <img className={`coleccion__muestra ${idx !== numero ? '' : 'img_activa'}`} src={image.url_img} alt='' />
                                </li>
                            )
                        }
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Mostrar