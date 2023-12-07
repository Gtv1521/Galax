import { useMutation } from "@tanstack/react-query";
import { deleteAlbum } from "../querys/albums.query";


export function useDeleteAlbum() {
    return useMutation({
        mutationFn: async ({id, ruta}) => deleteAlbum(id, ruta)
    })
}