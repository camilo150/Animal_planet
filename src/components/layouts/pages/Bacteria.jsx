import React from 'react'
import Header from "../interfaz/Header"
import "./../styles/bacteria.css"
import biodiversidad from '../../database/database'

const Bacteria = () => {

  const dominioBacteria = biodiversidad.find(d => d.dominio === 'Bacteria');

  return (
    <div className='bacteria-body'>
      <Header></Header>
      <h1 className='bacteria-anuncio'>El dominio Bacteria agrupa a los organismos vivos unicelulares que generalmente son de tamaño microscópico.</h1>
      <details className='informacion-dominio'>
        <summary>Quiero saber mas sobre este dominio</summary>
        <p className='texto-saberMas'><span className='caracteristica'>Estructura Celular </span>: Las bacterias son organismos procariotas, lo que significa que sus células no tienen un núcleo definido ni organelos membranosos como las mitocondrias o el retículo endoplásmico. Su material genético, generalmente en forma de una molécula circular de ADN, se encuentra en una región de la célula llamada nucleoide.
          <p className='texto-saberMas'><span className='caracteristica'>Tamaño</span>: Las bacterias son típicamente de tamaño microscópico, generalmente entre 0.5 a 5 micrómetros de longitud, aunque algunas pueden ser más grandes o más pequeñas.</p>
          <p className='texto-saberMas'><span className='caracteristica'>Formas</span>: Las bacterias pueden tener diversas formas, como cocos (esféricos), bacilos (en forma de bastón), espirilos (en forma de espiral) y vibriones (curvados en forma de coma).</p>
          <p className='texto-saberMas'><span className='caracteristica'>Reproducción</span>: Se reproducen principalmente por fisión binaria, un proceso asexual en el que una célula se divide en dos células hijas genéticamente idénticas.</p>
          <p className='texto-saberMas'><span className='caracteristica'>Metabolismo</span>: Las bacterias tienen una amplia gama de metabolismos y pueden ser autótrofas (que producen su propio alimento, como las cianobacterias que realizan fotosíntesis) o heterótrofas (que obtienen nutrientes de fuentes externas).</p>
          <p className='texto-saberMas'><span className='caracteristica'>Ambientes</span>: Se encuentran en casi todos los hábitats de la Tierra, incluyendo suelos, aguas, aire, y en organismos vivos como plantas, animales y humanos. Algunas bacterias viven en condiciones extremas, como fuentes termales o ambientes muy salinos.</p>
          <p className='texto-saberMas'>En resumen, una bacteria es un microorganismo unicelular procariota que tiene una estructura simple sin núcleo definido, una gran variedad de formas y modos de vida, y desempeña roles esenciales en los ecosistemas y en la salud de otros organismos.</p></p>
      </details>

      <section className='contenedor-reino' >
        {dominioBacteria.reinos.map((reino, idxReino) => (
          <section key={idxReino} >
            <h1 className='reino-nombreA'>{reino.reino}</h1>
            <section className='contenedor-seresVivos'>
              {reino.seresVivos.map((ser, idxSer) => (
                <section className='serVivoA' key={idxSer}>
                  <h1 className='servivo-nombreA' >{ser.nombre}</h1>
                  <img className='imagen-serVivoA' src={ser.imagen} alt="foto del ser vivo" />
                  <h4 className='servivo-descripcionA' >{ser.descripcion}</h4>
                </section>
              ))}
            </section>

          </section>
        ))}
      </section>
    </div>
  )
}

export default Bacteria