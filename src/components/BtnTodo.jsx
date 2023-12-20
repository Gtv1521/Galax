import { albums, useViewImages } from "../hooks/gets"
import { id } from "../querys/complementos"

const BtnTodo = ({ setAlbumActivo, setEstadoBtn, estadoBtn, num }) => {

    const ruta = 'verImagesId'
    const { data: imagenes } = useViewImages({ id, ruta })

    return (
        <>
            <button
                onClick={() => {
                    setAlbumActivo(0)
                    setEstadoBtn(num)
                }}
                className={`boton_album ${estadoBtn === num ? 'btn__activo' : ''}`}
            >
                <div className="invisible"></div>
                {
                    imagenes?.data.message ? 'no data' :
                        imagenes.data.map((album, index) =>
                            (imagenes.data.length - 4) <= index && <img className={'imgAlbum'} src={album.url_img} alt="" />
                        )
                }
                <div className={'titulos'}> Todo</div>
            </button>
        </>
    )
}

export default BtnTodo