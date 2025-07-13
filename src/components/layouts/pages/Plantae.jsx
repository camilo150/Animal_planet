import React from 'react'
import Header from "../interfaz/Header"
import "./../styles/Plantae.css"
import biodiversidad from '../../database/database'

const Bacteria = () => {

    const especimenesPlantae = biodiversidad
        .flatMap(dominio => dominio.reinos)               // extrae todos los reinos de todos los dominios
        .filter(reino => reino.reino === "Plantae")        // filtra solo el reino "Plantae"
        .flatMap(reino => reino.seresVivos);               // extrae los seres vivos del reino Plantae


    return (
        <div className='body-plantae'>
            <Header></Header>
            <h1 className='dominio-anuncio'>El Reino Plantae agrupa a todos los organismos eucariotas, multicelulares, autótrofos y fotosintéticos.</h1>
            <details className='informacion-dominio'>
                <summary>Quiero saber mas sobre este Reino</summary>
                <p className='texto-saberMas'><span className='caracteristica'>Células eucariotas </span>: con núcleo definido.</p>
                <p className='texto-saberMas'>la malloria de especimenes están aferrados al suelo por raices</p>
                <p className='texto-saberMas'><span className='caracteristica'>Autótrofos</span> producen su alimento (fotosíntesis).</p>
                <p className='texto-saberMas'>Presentan tejidos diferenciados: raíces, tallos, hojas, flores (en muchos casos).</p>
                <p className='texto-saberMas'><span className='caracteristica'>Reproducción</span>: Se reproducen principalmente por fisión binaria, un proceso asexual en el que una célula se divide en dos células hijas genéticamente idénticas, tambien por cemillas o frutos que otros seres vivos ingieren y en sus eses la semilla cae al suelo y asi es plantada.</p>
                <p className='texto-saberMas'><span className='caracteristica'>Metabolismo</span>: sexual y asexual (según el grupo)</p>
                <p className='texto-saberMas'><span className='caracteristica'>Tamaño</span>:Sus tamaños suelen ser muy variados llegando hasta niveles colosales o microscópicos</p>
            </details>

            <section className='contenedor-seresVivos' >
                {especimenesPlantae.map((especie, i) => (
                    <section key={i} className='serVivoC' >
                        <h1 className='reino-nombreC'>{especie.nombre}</h1>
                        <img className='imagen-serVivo' src={especie.imagen} alt="foto del ser vivo" />
                        <h3 className='servivo-tipo' >{especie.tipo}</h3>
                        <h4 className='servivo-descripcionA' >{especie.descripcion}</h4>
                    </section>
                ))}
            </section>
        </div>
    )
}

export default Bacteria