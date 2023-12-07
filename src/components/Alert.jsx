import { useDeleteAlbum } from "../hooks/delete"
import { useQueryClient } from '@tanstack/react-query'


const Alert = ({ mensaje, setBorrar, setMenu, setActivo, id, aviso, nombre, ruta }) => {
    const mutacion = useDeleteAlbum()

    const queryClient = useQueryClient()
    if (mutacion.isSuccess) {
        if (setMenu !== undefined) {
            setMenu(false)
        }

        if (setActivo !== undefined) {
            setActivo(false)
        }

        queryClient.invalidateQueries({ queryKey: ['images'] })
        queryClient.invalidateQueries({ queryKey: ['albums'] })
        setBorrar(false)
    }

    const Borrado = () => {

        mutacion.mutate({ id: id, ruta: ruta })
    }
    return (
        <div>
            <div className='message__delete'>
                <div className='message'>
                    {mensaje}
                    <p className='titulo'>{nombre}?</p>
                    <button className='submit' onClick={Borrado} >Seguro</button>
                    <button className='submit' onClick={() => setBorrar(false)}>Cancelar</button>
                    <p className=''>{aviso}</p>
                </div>
            </div>
        </div>
    )
}

export default Alert