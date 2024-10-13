import React from 'react'
import Header from "../interfaz/Header"
import { useState } from 'react'
const Bacteria = () => {
  const [saberMas,SetSaberMas]=useState(false)
  const handleToggle=()=>{
    SetSaberMas(!saberMas)}
    return (
    <div className='bacteria-body'>
        <Header></Header>
        <h1 className='bacteria-anuncio'>El dominio Bacteria agrupa a los organismos vivos unicelulares que generalmente son de tamaño microscópico.</h1>
        <button id='bacteria-boton-saberMas' onClick={handleToggle}>Quiero saber mas sobre este dominio
        {saberMas &&(
          <section>
          <p className='bacteria-texto-saberMas'>Estructura Celular: Las bacterias son organismos procariotas, lo que significa que sus células no tienen un núcleo definido ni organelos membranosos como las mitocondrias o el retículo endoplásmico. Su material genético, generalmente en forma de una molécula circular de ADN, se encuentra en una región de la célula llamada nucleoide.
          <p className='bacteria-texto-saberMas'>Rol Ecológico: Desempeñan roles cruciales en los ecosistemas, como la descomposición de materia orgánica, el ciclo de nutrientes, y en simbiosis con otros organismos. Algunas bacterias son patógenas y pueden causar enfermedades en humanos, animales y plantas. </p>
          <p className='bacteria-texto-saberMas'>Tamaño: Las bacterias son típicamente de tamaño microscópico, generalmente entre 0.5 a 5 micrómetros de longitud, aunque algunas pueden ser más grandes o más pequeñas.</p>
          <p className='bacteria-texto-saberMas'>Formas: Las bacterias pueden tener diversas formas, como cocos (esféricos), bacilos (en forma de bastón), espirilos (en forma de espiral) y vibriones (curvados en forma de coma).</p>
          <p className='bacteria-texto-saberMas'>Reproducción: Se reproducen principalmente por fisión binaria, un proceso asexual en el que una célula se divide en dos células hijas genéticamente idénticas.</p>
          <p className='bacteria-texto-saberMas'>Metabolismo: Las bacterias tienen una amplia gama de metabolismos y pueden ser autótrofas (que producen su propio alimento, como las cianobacterias que realizan fotosíntesis) o heterótrofas (que obtienen nutrientes de fuentes externas).</p>
          <p className='bacteria-texto-saberMas'>Ambientes: Se encuentran en casi todos los hábitats de la Tierra, incluyendo suelos, aguas, aire, y en organismos vivos como plantas, animales y humanos. Algunas bacterias viven en condiciones extremas, como fuentes termales o ambientes muy salinos.</p>
          <p className='bacteria-texto-saberMas'>En resumen, una bacteria es un microorganismo unicelular procariota que tiene una estructura simple sin núcleo definido, una gran variedad de formas y modos de vida, y desempeña roles esenciales en los ecosistemas y en la salud de otros organismos.</p></p>
          </section>
        )}
        </button>

        <section className='bacteria-contenedor'>
        
        </section>
    </div>
  )
}

export default Bacteria