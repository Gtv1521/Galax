import { PrimeraLetra } from "../querys/complementos"

const Titulo = ({ titulo }) => {
    return (
        <>
            <h1 className={'titulo'}>{PrimeraLetra(titulo)}</h1>
        </>
    )
}

export default Titulo
