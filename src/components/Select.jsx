import Cookies from 'universal-cookie'
import { useViewAlbum } from '../hooks/gets';

const Select = ({ dato, nombre }) => {

    const cookie = new Cookies()
    const id = cookie.get('id');

    const { data: albums } = useViewAlbum(id)

    function PrimeraLetra(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <>

            <div className={'inputGroup'}>
                <label className={'label'}>{nombre}:</label>
                <div className={'inputduo'}>

                    <select className={'input'} {...dato} >
                        {
                            albums?.data.map(album =>
                                <option key={album.id_album} value={album.id_album}>{PrimeraLetra(album.nombre_album)}</option>
                            )
                        }
                    </select>
                </div>
            </div>
        </>
    )
}

export default Select