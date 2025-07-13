import "./../styles/Animalia.css";
import Header from "../interfaz/Header";
import biodiversidad from "../../database/database";
const Animalia = () => {
    const animales = biodiversidad
        .flatMap(dominio => dominio.reinos)
        .filter(reino => reino.reino === "Animalia")
        .flatMap(reino => reino.seresVivos);
  return (
    <div className="body-animalia">
      <Header></Header>
      <h1 className="dominio-anuncio">El reino animalia comprende seres vivos multicelulares, heterótrofos y con capacidad de movimiento.</h1>
        <details className="informacion-dominio">
            <summary>Quiero saber mas sobre este Reino</summary>
            <p className="texto-saberMas">El reino Animalia es uno de los cinco reinos de la clasificación biológica. Se caracteriza por incluir organismos multicelulares, eucariotas y heterótrofos, que obtienen su alimento de otros seres vivos. Los animales presentan una gran diversidad de formas, tamaños y hábitats, y se encuentran en prácticamente todos los ecosistemas del planeta.</p>
            <p className="texto-saberMas">Los animales se dividen en dos grandes grupos: invertebrados, que no tienen columna vertebral, y vertebrados, que sí la tienen. Los invertebrados incluyen organismos como los insectos, moluscos y crustáceos, mientras que los vertebrados abarcan peces, anfibios, reptiles, aves y mamíferos.</p>
            <p className="texto-saberMas">Los animales tienen un sistema nervioso que les permite responder a estímulos del entorno y coordinar sus movimientos. Esto les ayuda a interactuar con su medio ambiente, buscar alimento, escapar de depredadores y comunicarse con otros individuos de su especie.</p>
            <p className="texto-saberMas">La reproducción en los animales puede ser sexual o asexual, y muchos presentan comportamientos complejos relacionados con el cortejo y la crianza de sus crías.</p>
            <p className="texto-saberMas">Los animales desempeñan un papel crucial en los ecosistemas, ya que contribuyen a la polinización, dispersión de semillas, control de poblaciones de otros organismos y reciclaje de nutrientes.</p>
            <p className="texto-saberMas">La conservación de los animales es fundamental para mantener la biodiversidad y el equilibrio ecológico. Muchas especies están amenazadas por la pérdida de hábitat, la caza excesiva, la contaminación y el cambio climático.</p>
        </details>
        
        <section className="contenedor-seresVivos">
            {animales.map((animal, i) => (
                <div className="serVivoE" key={i}>
                    <h1 className="reino-nombreE">{animal.nombre}</h1>
                    <img className="imagen-serVivo" src={animal.imagen} alt={`Imagen de ${animal.nombreComun}`} />
                    <h4 className="servivo-tipo">{animal.tipo}</h4>
                    <h3 className="servivo-descripcionE">{animal.descripcion}</h3>
                </div>
            ))}
        </section>
    </div>
  )
}

export default Animalia