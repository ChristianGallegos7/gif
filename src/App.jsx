import { useEffect, useState } from "react"
import { Formulario } from "./components/Formulario"
import { ListadoImagenes } from "./components/ListadoImagenes";
function App() {

    //state de la app
    const [busqueda, guardarBusqueda] = useState('');
    const [imagenes, guardarImagenes] = useState([]);
    const [paginaactual, guardarPaginaActual] = useState(1)
    const [totalpaginas, guardarTotalPaginas] = useState(5)

    useEffect(() => {
        const consultarApi = async () => {
            if (busqueda === '') return;
            const imagenesPorPagina = 30;
            const key = '40357521-a9451bd8fb5e0021f5f5de06a';
            const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            guardarImagenes(resultado.hits);
            console.log(resultado);
            //calcular el total de paginas para la paginacion

            const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
            guardarTotalPaginas(calcularTotalPaginas)
            //mover la pantalla hacia arriba

            const jumbotron = document.querySelector('.jumbotron')
            jumbotron.scrollIntoView({ behavior: "smooth" })
        }
        consultarApi()
    }, [busqueda, paginaactual])

    //definir pagina anterior
    const paginaAnterior = () => {
        const nuevaPaginaActual = paginaactual - 1;
        if (nuevaPaginaActual === 0) return;
        guardarPaginaActual(nuevaPaginaActual)
    }
    //definir pagina siguiente

    const paginaSiguiente = () => {
        const nuevaPaginaActual = paginaactual + 1;
        if (nuevaPaginaActual > totalpaginas) return;
        guardarPaginaActual(nuevaPaginaActual)
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <p className="lead text-center">Buscador de Imágenes</p>

                <Formulario
                    guardarBusqueda={guardarBusqueda}
                />
            </div>

            <div className="row justify-content-center">
                <ListadoImagenes
                    imagenes={imagenes}
                />

                {(paginaactual === 1) ? null : (
                    <button
                        type="button"
                        className="btn btn-info mr-1 w-25 mb-5 mx-5"
                        onClick={paginaAnterior}
                    >&laquo; Anterior </button>
                )}

                {(paginaactual === totalpaginas) ? null : (
                    <button
                        type="button"
                        className="btn btn-info w-25 mb-5"
                        onClick={paginaSiguiente}
                    >Siguiente &raquo;</button>
                )}
            </div>
        </div>
    );
}

export default App