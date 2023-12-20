import { ImSpinner9 } from 'react-icons/im'
import { useBuscaNombre } from '../hooks/gets'
import { PrimeraLetra, id } from '../querys/complementos'
import '../styles/index.scss'
const Footer = () => {
    const { data: user, isPending, isSuccess } = useBuscaNombre(id)

    return (
        <>
            <div className={'footer'}>
                {
                    isPending && <span><ImSpinner9 className={'spinner'} /></span>
                }
                {
                    isSuccess &&
                    PrimeraLetra(user?.data[0].nombre_user)
                }

            </div>
        </>
    )
}

export default Footer