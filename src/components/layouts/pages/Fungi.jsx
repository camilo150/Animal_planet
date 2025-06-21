import React from 'react'
import "../../layouts/interfaz/Header"
import biodiversidad from '../../database/database'
import Header from '../../layouts/interfaz/Header'
import "../styles/Fungi.css"
const Fungi = () => {
    const hongos = biodiversidad
    .flatMap(dominio => dominio.reinos)
    .filter(reino => reino.reino === "Fungi" )
    .flatMap(reino => reino.seresVivos)
  return (
    <div className='fungi-body'>
        <Header></Header>
        <h1 className='dominio-anuncio'>conforman un grupo de organismos eucarióticos​ entre los que se encuentran los mohos, las levaduras y los organismos productores de setas. </h1>
            <details className='informacion-dominio'>
                <summary>Quiero saber mas sobre este Reino</summary>
                <p className='texto-saberMas'><span className='caracteristica'>Carecen de movilidad propia</span>: Los hongos crecen en el suelo, en las superficies, o sobre troncos o materia orgánica en descomposición, dependiendo de sus preferencias. Al igual que las plantas, se mantienen toda su vida en el mismo lugar, incapaces de moverse a voluntad.</p>
                <p className='texto-saberMas'><span className='caracteristica'>Poseen pared celular</span>Las células de los hongos son eucariotas, es decir, tienen un núcleo celular Además, tienen una pared celular rígida, semejante a la de las células vegetales, pero en lugar de estar compuesta de celulosa, está compuesta de quitina, la misma sustancia que otorga a los insectos la dureza de sus exoesqueletos. Además, son células alargadas, que pueden contener varios núcleos, y poseen vacuolas pero no cloroplastos, pues no hacen fotosíntesis.</p>
                <p className='texto-saberMas'><span className='caracteristica'>Crecen como hifas</span> El crecimiento de los hongos se produce a manera de hifas, estructuras cilíndricas y uniformes que pueden ir de los pocos micrómetros a los varios centímetros de longitud, y pueden superponerse en un proceso de ramificación o bifurcación. Conforme las hifas crecen, forman una masa enmarañada o red con forma de tejido llamada micelio.</p>
                <p className='texto-saberMas'><span className="caracteristica">Nutricion eterotrofa</span> La nutrición de los hongos es siempre heterótrofa, o sea, no pueden generar su propio alimento como las plantas, sino que deben descomponer la materia orgánica proveniente de otras formas de vida vegetal o animal. Dependiendo de cómo es su nutrición, existen distintos tipos de hongos:Sapofritos,Micorrizógenos,Liquenizados,Parasitarios</p>
                <p className='texto-saberMas'><span className='caracteristica'>Reproducción</span>: Los hongos se reproducen de modo sexual y asexual, siempre a través de la producción de esporas: formas resistentes al medio ambiente que, cuando se dan las condiciones óptimas, germinan y crean un nuevo ejemplar del hongo. El crecimiento de las hifas, una vez germinadas las esporas, puede ser muy rápido: un hongo tropical crece unos 5 mm por minuto.</p>
            </details>
            <section className='contenedor-seresVivos' >
                {hongos.map((hongo, i) => (
                    <section key={i} className='serVivoD' >
                        <h1 className='reino-nombreD'>{hongo.nombre}</h1>
                        <img className='imagen-serVivo' src={hongo.imagen} alt="foto del ser vivo" />
                        <h3 className='servivo-tipo' >{hongo.tipo}</h3>
                        <h4 className='servivo-descripcionD' >{hongo.descripcion}</h4>
                    </section>
                ))}
            </section>

    </div>
  )
}

export default Fungi