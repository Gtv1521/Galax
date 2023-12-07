import { useMutation } from "@tanstack/react-query";
import { postUpdateFoto } from "../querys/fotos.query";

export function useUpdateFoto() {
    return useMutation({
        mutationFn: async (datos) => postUpdateFoto(datos)
    })
}