import biodiversidad from "../../database/database"
import Header from "../interfaz/Header"
import "../styles/Protista.css"
const Protista = () => {
    const especimenesProtista = biodiversidad
        .flatMap(dominio => dominio.reinos) // extrae todos los reinos    
        .filter(reino => reino.reino === "Protista") // filtra solo "Protista"
        .flatMap(reino => reino.seresVivos) // accede a los objetos con "classe"


    return (
        <div className='body-protista'>
            <Header></Header>
            <h1 className='dominio-anuncio'>El Reino Protista agrupa a organismos eucariotas, unicelulares o multicelulares simples, que no son ni animales, ni plantas, ni hongos.</h1>
            <details className='informacion-dominio'>
                <summary>Quiero saber mas sobre este Reino</summary>
                <p className='texto-saberMas'><span className='caracteristica'>Células eucariotas </span>: con núcleo definido.</p>
                <p className='texto-saberMas'>La mayoría de los organismos son unicelulares, aunque algunos son multicelulares simples.</p>
                <p className='texto-saberMas'><span className='caracteristica'>Heterótrofos y autótrofos</span>: pueden obtener nutrientes de diversas formas.</p>
                <p className='texto-saberMas'>Presentan una gran diversidad de formas y modos de vida.</p>
                <p className='texto-saberMas'><span className='caracteristica'>Reproducción</span>: Se reproducen principalmente por fisión binaria, un proceso asexual en el que una célula se divide en dos células hijas genéticamente idénticas.</p>
                <p className='texto-saberMas'><span className='caracteristica'>Metabolismo</span>: sexual y asexual (según el grupo)</p>
                <p className='texto-saberMas'><span className='caracteristica'>Tamaño</span>: Sus tamaños suelen ser muy variados, desde microscópicos hasta algunos centímetros.</p>

            </details>

            <section className='contenedor-reino'>
                {especimenesProtista.map((classeObj, i) => (
                    <section key={i}>
                        <h1 className='reino-nombreF'>{classeObj.classe}</h1>
                        <section className='contenedor-seresVivos'>
                            {classeObj.A.map((especie, idx) => (
                                <section className='serVivoF' key={idx}>
                                    <h1 className='servivo-nombre'>{especie.nombre}</h1>
                                    <img className='imagen-serVivo' src={especie.imagen} alt={`Imagen de ${especie.nombre}`} />
                                    <h3 className='servivo-tipo'>{especie.tipo}</h3>
                                    <h4 className='servivo-descripcionF'>{especie.descripcion}</h4>
                                </section>
                            ))}
                        </section>
                    </section>
                ))}
            </section>
        </div>
    )
}

export default Protista