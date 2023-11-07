import { postNewAlbum } from "../querys/fotos.query";
import { useMutation } from "@tanstack/react-query";


export function useNewAlbum(){
    return useMutation({ 
        mutationFn: async (datos) => postNewAlbum(datos) 
    })
}
