import React from 'react'
import "./../../../components/layouts/styles/inicio.css"
import { Link } from 'react-router-dom'
import Header from '../interfaz/Header'
import bacteria from '../../../assets/img/inicio-bacteria.jpg'
import arkea from '../../../assets/img/inicio-arquea.jpg'
import eucariota from '../../../assets/img/inicio-eucariota.jpg'


const Inicio = () => {
    return (
        <div className='inicio-body'>
                <Header></Header>
                <h1 className='inicio-anuncio'>¡bienvenido a una experiencia de mucho conocimiento en animal planet!</h1>
                <h1 className='inicio-anuncio'>pero para ello primero escoje el dominio sobre el cual quieres conocer</h1>
                <details className='informacion-dominio'>
                    <summary>Pero, que es un dominio?</summary>
                    <p>En biología, un dominio es el nivel más alto en la jerarquía taxonómica de la clasificación biológica de los organismos. Se trata de una categoría superior que agrupa a los seres vivos en grandes grupos basados en características fundamentales de su estructura celular y genética. Hay tres dominios principales reconocidos en la actualidad:</p>
                </details>
                <section className='contenedor-dominios'>
                    <Link className="link-dominio" to={"/dominio-bacteria"}>
                        <div className="contenedor-imagen-dominios">
                            <img className='img-dominios' src={bacteria} alt="Bacteria" />
                            <p className='img-texto-dominios'>Bacteria</p>
                        </div>
                    </Link>
                    <Link className="link-dominio" to={"/dominio-arkea"}>
                        <div className="contenedor-imagen-dominios">
                            <img className='img-dominios' src={arkea} alt="Arkea" />
                            <p className='img-texto-dominios'>Arkea</p>
                        </div>
                    </Link>
                    <Link className="link-dominio" to={"/dominio-eukarya"}>
                        <div className="contenedor-imagen-dominios">
                            <img className='img-dominios' src={eucariota} alt="Eukarya" />
                            <p className='img-texto-dominios'>Eukarya</p>
                        </div>
                    </Link>
                </section>
        </div>
    )
}
export default Inicio