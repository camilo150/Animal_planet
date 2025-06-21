import { Link } from 'react-router-dom'
import '../styles/aukarya.css'
import Header from '../interfaz/Header'
import Plantae from "../../../assets/img/reinos/reino-plantae.webp"
import Fungi from "../../../assets/img/reinos/reino-fungi.jpg"
import Animalia from "../../../assets/img/reinos/reino-animalia.jpg"
import Chromista from "../../../assets/img/reinos/reino-chromista.jpg"
import Protista from "../../../assets/img/reinos/reino-protista.jpg"
const Eukarya = () => {

    return (
        <div className='eukarya-body'>
            <Header></Header>
            <h1 className='dominio-anuncio'>El dominio Eukarya contiene seres vivos con celula eucariota, una celula mas compleja con un nucleo definido </h1>
            <details className='informacion-dominio'>
                <summary>Quiero saber mas sobre este dominio</summary>
                <p className="texto-saberMas">El Dominio Eukarya agrupa a todos los seres vivos cuyas células poseen un núcleo definido y estructuras internas complejas llamadas orgánulos. Es el dominio de la vida organizada, evolucionada y diversa, que abarca desde las microscópicas algas unicelulares hasta las majestuosas secuoyas, desde los hongos hasta el ser humano.</p>
                <p className="texto-saberMas">A diferencia de las arqueas y bacterias, los eucariotas tienen una arquitectura celular refinada, donde cada parte cumple una función especializada, como una ciudad viva en miniatura. Gracias a esta complejidad, los organismos eucariotas han conquistado todos los ecosistemas del planeta, desarrollando tejidos, órganos y sistemas que permiten funciones avanzadas como la locomoción, la percepción, la inteligencia y la consciencia.</p>
                <p className="texto-saberMas"><span className="caracteristica">Células con núcleo</span>: El ADN está protegido dentro de una membrana nuclear.</p>
                <p className="texto-saberMas"><span className="caracteristica">Orgánulos especializados</span>: Mitocondrias, cloroplastos, retículo endoplasmático, aparato de Golgi y más.</p>
                <p className="texto-saberMas"><span className="caracteristica">Diversidad asombrosa</span>: Incluye protistas, hongos, plantas y animales.</p>
                <p className="texto-saberMas"><span className="caracteristica">Reproducción avanzada</span>: Capacidad para reproducirse sexualmente, favoreciendo la variabilidad genética.</p>
            </details>
            <section className='contenedor-reinos'>
                <Link to={"/Plantae"} className="link-dominio-eukarya"><div className="contenedor-imagen-reino"><img src={Plantae} alt="" className="img-reino" /> <p className="img-texto-reino">Plantae</p></div></Link>
                <Link to={"/Fungi"} className="link-dominio-eukarya"><div className="contenedor-imagen-reino"><img src={Fungi} alt="" className="img-reino" /> <p className="img-texto-reino">Fungi</p></div></Link>
                <Link to={"google.com"} className="link-dominio-eukarya"><div className="contenedor-imagen-reino"><img src={Animalia} alt="" className="img-reino" /> <p className="img-texto-reino">Animalia</p></div></Link>
                <Link to={"google.com"} className="link-dominio-eukarya"><div className="contenedor-imagen-reino"><img src={Protista} alt="" className="img-reino" /> <p className="img-texto-reino">Protista</p></div></Link>
                <Link to={"google.com"} className="link-dominio-eukarya"><div className="contenedor-imagen-reino"><img src={Chromista} alt="" className="img-reino" /> <p className="img-texto-reino">Chromista</p></div></Link>
            </section>
        </div>
    )
}

export default Eukarya