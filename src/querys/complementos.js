import cookies from 'universal-cookie'

const Cookie = new cookies()
export const id = Cookie.get('id') 

export function PrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


