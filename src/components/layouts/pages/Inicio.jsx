import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Foother from '../interfaz/Foother'
import Header from '../interfaz/Header'
import bacteria from '../../../assets/img/inicio-bacteria.jpg'
import arquea from '../../../assets/img/inicio-eucariota.jpg'
import eucariota from '../../../assets/img/inicio-arquea.jpg'

const Inicio = () => {   // el inicio es la pagina que le sigue a la de la portada cuyo proposito es dar informacion sobre el contenido
  const [mostrarInfo,SetmostrarInfo]=useState(false)
  const handleToggle=()=>{   // hace que al dar click al boton saque un texto y al darle click otr avez lo coculta
    SetmostrarInfo(!mostrarInfo)
  }
  return (
    <div id='inicio-body'>
        <Header></Header>
      
          <h1 className='inicio-anuncio'>¡bienvenido a una experiencia de mucho conocimiento en animal planet!</h1>
          <h1 className='inicio-anuncio'>pero para ello primero escoje el dominio sobre el cual quieres conocer</h1>
          <button id='inicio-informacion-dominio' onClick={handleToggle}>Pero, que es un dominio?
           {mostrarInfo &&(
              <p>En biología, un dominio es el nivel más alto en la jerarquía taxonómica de la clasificación biológica de los organismos. Se trata de una categoría superior que agrupa a los seres vivos en grandes grupos basados en características fundamentales de su estructura celular y genética. Hay tres dominios principales reconocidos en la actualidad:</p>)}
          </button>
          <section id='contenedor-dominios'>
    <Link className="link-dominio" to={"/dominio-bacteria"}>
        <div className="contenedor-imagen">
            <img className='img-dominio' src={bacteria} alt="Bacteria" />
            <p className='img-texto'>Bacteria</p>
        </div>
    </Link>
    <Link className="link-dominio">
        <div className="contenedor-imagen">
            <img className='img-dominio' src={eucariota} alt="Arkea" />
            <p className='img-texto'>Arkea</p>
        </div>
    </Link>
    <Link className="link-dominio">
        <div className="contenedor-imagen">
            <img className='img-dominio' src={arquea} alt="Eukarya" />
            <p className='img-texto'>Eukarya</p>
        </div>
    </Link>
</section>

        <Foother></Foother> 
    </div>
  )
}
export default Inicio