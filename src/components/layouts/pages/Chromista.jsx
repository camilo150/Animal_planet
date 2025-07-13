import '../styles/Chromista.css'
import Header from '../interfaz/Header'
import biodiversidad from '../../database/database'

const Chromista = () => {
    const especimenesChromista = biodiversidad
        .flatMap(dominio => dominio.reinos) // extrae todos los reinos    
        .filter(reino => reino.reino === "Chromista") // filtra solo "Chromista"
        .flatMap(reino => reino.seresVivos) // accede a los objetos con "classe"

    return (
        <div className='chromista-body'>
            <Header />
            <h1 className='dominio-anuncio'>El Reino Chromista agrupa organismos eucariotas, principalmente unicelulares, que incluyen algas y otros organismos fotosintéticos.</h1>
            <details className='informacion-dominio'>
                <summary>Información del Dominio</summary>
                <p>El Reino Chromista incluye organismos que poseen cloroplastos y realizan fotosíntesis, pero que no son plantas. Estos organismos son fundamentales para los ecosistemas acuáticos y terrestres.</p>
                <p className='texto-saberMas'><span className='caracteristica'>Células eucariotas</span>: con núcleo definido y organelos membranosos.</p>
                <p className='texto-saberMas'><span className='caracteristica'>Unicelulares y multicelulares</span>: la mayoría son unicelulares, pero algunos forman colonias o estructuras multicelulares simples.</p>
                <p className='texto-saberMas'><span className='caracteristica'>Reproducción</span>: Se reproducen principalmente por fisión binaria, un proceso asexual en el que una célula se divide en dos células hijas genéticamente idénticas, aunque también pueden reproducirse sexualmente.</p>
                <p className='texto-saberMas'><span className='caracteristica'>Metabolismo</span>: Autótrofos, principalmente fotosintéticos, aunque algunos son heterótrofos.</p>
                <p className='texto-saberMas'><span className='caracteristica'>Tamaño</span>: Varían desde microscópicos hasta algunos centímetros.</p>
                <p className='texto-saberMas'><span className='caracteristica'>Ejemplos</span>: Incluyen diatomeas, algas pardas y algas doradas.</p>
            </details>

            <section className='contenedor-reino'>
                {especimenesChromista.map((organismo, index) => (
                    <section key={index}>
                        <h1 className='reino-nombreG'>{organismo.classe}</h1>
                        <section className='contenedor-seresVivos' >
                            {organismo.A.map((reino, idxReino) => (
                                <section className='serVivoG' key={idxReino}>
                                    <h1 className='servivo-nombre'>{reino.nombre}</h1>
                                    <img className='imagen-serVivo' src={reino.imagen} alt={`Imagen de ${reino.nombre}`} />
                                    <h3 className='servivo-tipo'>{reino.tipo}</h3>
                                    <h4 className='servivo-descripcionG'>{reino.descripcion}</h4>
                                </section>
                            ))}
                        </section>
                    </section>
                ))}
            </section>


        </div>
    )
}

export default Chromista