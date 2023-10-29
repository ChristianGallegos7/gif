import { Imagen } from "./Imagen"

export const ListadoImagenes = ({ imagenes }) => {
    return (
        <div className="row">
            {
                imagenes.map((imagen) => (
                    <Imagen
                        key={imagen.id}
                        imagen={imagen}
                    />
                ))
            }
        </div>
    )
}
