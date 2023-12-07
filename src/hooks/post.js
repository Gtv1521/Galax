import { putUpdateAlbum } from "../querys/albums.query";
import { postNewAlbum, postNewFoto } from "../querys/fotos.query";
import { useMutation } from "@tanstack/react-query";


export function useNewAlbum(){
    return useMutation({ 
        mutationFn: async (datos) => postNewAlbum(datos) 
    })
}
export function useNewFoto(){
    return useMutation({ 
        mutationFn: async (datos) => postNewFoto(datos) 
    })
}

export function useUpdateAlbum() {
    return useMutation({
        mutationFn: async (datos) => putUpdateAlbum(datos)
    })
}
