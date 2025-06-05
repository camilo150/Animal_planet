import React from 'react'
import Header from '../interfaz/Header'
import biodiversidad from '../../database/database'
import './../styles/Arkea.css'

const Arkea = () => {
    const dominioArkea = biodiversidad.find(d =>d.dominio === 'Arkea')
  return (
    <div className='arkea-fondo'>
      <Header></Header>
      <h1 className='arkea-anuncio'>Las arqueas son microorganismos unicelulares similares a las bacterias, pero con características bioquímicas y genéticas únicas que las hacen muy distintas.</h1>
    <details className='informacion-dominio' >
      <summary>
        Quiero saber más sobre este dominio</summary>
        <p className='texto-saberMas'>son microorganismos unicelulares con una estructura celular similar a las bacterias, pero con algunas diferencias, por lo se consideraron previamente como bacterias antiguas (Aqueobacterias). Actualmente se consideran un grupo de seres vivos independientes (dominio Archeae), independiente de los otros dos grupos de seres vivos las bacterias (dominio Bactaria) y los eucariotas (dominio Eukarya). En este último dominio se  incluyen a los animales, plantas, hongos y protozoos.</p>
        <p className='texto-saberMas'>A pesar de ser similares en tamaño y forma a las bacterias, algunas tienen formas muy distintas, con células planas y cuadradas. A veces sus genes y rutas metabólicas, son más parecidas a las de los eucariotas, como ocurre con las enzimas para la transcripción y traducción. También poseen moléculas diferentes en su estructura (éteres lipídicos en sus membranas celulares), y utilizan muchas fuentes de energía (compuestos orgánicos, amoniaco, iones de metales o hidrógeno). Toleran salinidades elevadas, utilizan la luz solar como fuente de energía, y pueden fijar el carbono. Se dividen por fisión binaria, fragmentación o gemación, a diferencia de otros seres vivos.</p>
        <p className='texto-saberMas'>Se consideran microorganismos extremófilos, es decir que pueden desarrollarse en condiciones “extremas”, como ocurre en agua termales de elevada temperatura, aguas saladas, pero también pueden encontrarse en el suelo, los océanos, los pantanos  y en el intestino humano o de los rumiantes, en los que contribuye a digerir los alimentos.</p>
    </details>
    <section className='contenedor-reino'>
      {dominioArkea.reinos.map((reino,idxReino)=>(
        <section key={idxReino}>
          <h1 className='reino-nombreB'>{reino.reino}</h1>
          <section className='contenedor-seresVivos'> 
            {reino.seresVivos.map((ser,idxSer)=>(
              <section className='serVivoB' key={idxSer}>
              <h1 className='servivo-nombreB'>{ser.nombre}</h1>
              <img className='imagen-serVivoB' src={ser.imagen} alt="" />
              <h4 className='servivo-descripcionB' >{ser.descripcion}</h4>
              </section>
            ))}
            </section>
        </section>
      ))}
    </section>
    </div>
  )
}

export default Arkea