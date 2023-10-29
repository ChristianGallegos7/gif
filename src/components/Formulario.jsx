import { useState } from "react";
import { Error } from "./Error";

export const Formulario = ({ guardarBusqueda }) => {

    const [termino, setTermino] = useState('')
    const [error, setError] = useState(false)



    const handleChange = (e) => {
        setTermino(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //validar
        if (termino.trim() === '') {
            setError(true)
            return;
        }
        setError(false);
        //guardar la busqueda
        guardarBusqueda(termino)
        setTermino('')
    }

    return (
        <form className="container mt-4" onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control mb-4"
                        placeholder="Buscar una imagen, ej: Café"
                        name="imagen"
                        onChange={handleChange}
                        value={termino}
                    />
                </div>

                <div className="form-group col-md-4">
                    <button type="submit" className="btn btn-primary font-bold">Buscar imagen</button>
                </div>
            </div>
            {error ? <Error mensaje="Agrega un término de búsqueda" /> : null}
        </form>
    );
}
