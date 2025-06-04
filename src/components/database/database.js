import AnabaenaImg from './../../assets/img/bacterias/Anabaena.jpg';
import SpirulinaImg from './../../assets/img/bacterias/Spirulina.jpg';
import NostocImg from './../../assets/img/bacterias/Nostoc.jpg';
import Prevotella from './../../assets/img/bacterias/Prevotella spp.jpg';
import FragilisImg from './../../assets/img/bacterias/Bacteroides fragilis.webp';
import Flavobacterium from './../../assets/img/bacterias/Flavobacterium spp.jpg';
import DeinococcusImg from './../../assets/img/arkeas/Deinococcus radiodurans.avif';
import ThermusImg from './../../assets/img/arkeas/Thermus aquaticus.jpg';
import Halobacterium from './../../assets/img/arkeas/Halobacterium salinarum.avif'
const biodiversidad = [
    {
        dominio: "Bacteria",
        reinos: [
            {
                reino: "Cianobacteria",
                seresVivos: [
                    {
                        nombre: "Anabaena sp",
                        tipo: "fotocintética",
                        descripcion: "Una arquitecta de la vida acuática. Esta alga azul verdosa transforma el nitrógeno del aire en nutrientes esenciales, permitiendo la existencia de complejas cadenas tróficas y alianzas simbióticas con plantas. Un motor invisible de los ecosistemas.",
                        imagen: AnabaenaImg
                    },
                    {
                        nombre: "Spirulina sp",
                        tipo: "fotocintética",
                        descripcion: "Una joya nutricional del mundo microbiano. Rica en proteínas, antioxidantes y vitaminas, esta cianobacteria no solo sostiene ecosistemas acuáticos sino que fortalece la salud humana como superalimento venerado.",
                        imagen: SpirulinaImg
                    },
                    {
                        nombre: "Nostoc sp",
                        tipo: "fotocintética",
                        descripcion: "Exploradora de extremos. Capaz de sobrevivir en desiertos, rocas o lagos helados, y de enriquecer suelos con nitrógeno vital. Un pionero en la terraformación natural del planeta.",
                        imagen: NostocImg
                    }
                ]
            },
            {
                reino: "Bacterias Simbióticas",
                seresVivos: [
                    {
                        nombre: "Bacteroides fragilis",
                        tipo: "simbionte",
                        descripcion: "Ayuda a digerir alimentos y fortalece el sistema inmunológico.",
                        imagen: FragilisImg
                    },
                    {
                        nombre: "Flavobacterium spp",
                        tipo: "simbionte",
                        descripcion: "Descompone compuestos orgánicos, útil en ambientes acuáticos.",
                        imagen: Flavobacterium
                    },
                    {
                        nombre: "Prevotella spp",
                        tipo: "simbionte",
                        descripcion: "Participa en la digestión de carbohidratos complejos en humanos.",
                        imagen: Prevotella
                    }
                ]
            }
        ]
    },
    {
        dominio: "Arkea",
        reinos: [
            {
                reino: "Deinococcus-Thermus",
                seresVivos: [
                    {
                        nombre: "Deinococcus radiodurans",
                        tipo: "extremófilo",
                        descripcion: "Apodado el 'Conan de los microbios'. Sobrevive a 1,000 veces más radiación que un humano, desafiando la destrucción nuclear. Su capacidad de reparar su propio ADN lo hace inmortal entre las bacterias.",
                        imagen: DeinococcusImg
                    },
                    {
                        nombre: "Thermus aquaticus",
                        tipo: "extremófilo",
                        descripcion: "El guardián del calor eterno. Este termófilo prospera en aguas hirvientes, y su enzima Taq polimerasa revolucionó la biotecnología al permitir la reacción en cadena de la polimerasa (PCR), clave en genética moderna.",
                        imagen: ThermusImg
                    }
                ]
            },
            {
                reino: "Euryarchaeota",
                seresVivos: [
                    {
                        nombre: "Halobacterium salinarum",
                        tipo: "extremófilo",
                        descripcion: "Señora de las salinas. Esta arquea halófila no solo habita ambientes donde pocos sobreviven, sino que produce su propia luz con bacteriorodopsina, como una estrella biológica en miniatura.",
                        imagen: Halobacterium
                    }
                ]
            }
        ]
    },
    {
        dominio: "Eukarya",
        reinos: [
            {
                reino: "Animalia",
                seresVivos: [
                    {
                        nombre: "Taipán occidental",
                        tipo: "terrestre",
                        descripcion: "La serpiente más venenosa del planeta. Su veneno puede acabar con 100 humanos en minutos, pero rara vez muerde. Es el sigiloso centinela del desierto australiano, veloz como el rayo, letal como la sombra.",
                        imagen: ""
                    },
                    {
                        nombre: "Escarabajo rinoceronte",
                        tipo: "terrestre",
                        descripcion: "El titán de los insectos. Posee una fuerza descomunal capaz de levantar 850 veces su peso. Es el Hércules del mundo miniatura, símbolo de resistencia y evolución poderosa.",
                        imagen: ""
                    },
                    {
                        nombre: "Araña",
                        tipo: "terrestre",
                        descripcion: "Tejedora suprema del equilibrio ecológico. Su seda es más fuerte que el acero por peso, y su instinto cazador mantiene a raya poblaciones de insectos. Una ingeniera letal y elegante de la naturaleza.",
                        imagen: ""
                    },
                    {
                        nombre: "Murciélago",
                        tipo: "aéreo",
                        descripcion: "El único mamífero volador, navega en la oscuridad con ecolocalización. Polinizador nocturno y devorador de plagas, sostiene ecosistemas y cosechas con alas silenciosas.",
                        imagen: ""
                    },
                    {
                        nombre: "Halcón peregrino",
                        tipo: "aéreo",
                        descripcion: "El rayo del cielo. Ave más veloz del mundo, alcanza más de 320 km/h en picada. Su vuelo es un poema de aerodinámica letal, símbolo de precisión y poder natural.",
                        imagen: ""
                    },
                    {
                        nombre: "Colibrí",
                        tipo: "aéreo",
                        descripcion: "Una chispa de energía viva. Capaz de volar en todas direcciones con alas que baten más de 50 veces por segundo. Vital en la polinización, es el mensajero vibrante de los jardines tropicales.",
                        imagen: ""
                    },
                    {
                        nombre: "Ballena",
                        tipo: "acuático",
                        descripcion: "El gigante del planeta. Canta con frecuencias inaudibles para el ser humano, viaja miles de kilómetros y mantiene el ciclo del carbono marino. Su presencia es monumental y casi mitológica.",
                        imagen: ""
                    },
                    {
                        nombre: "Exocoetus volitans",
                        tipo: "acuático",
                        descripcion: "El pez que quiso volar. Planea por encima del agua hasta 200 metros para evadir depredadores. Una maravilla evolutiva entre dos mundos.",
                        imagen: ""
                    },
                    {
                        nombre: "Medusa",
                        tipo: "acuático",
                        descripcion: "Fantasma inmortal del océano. Algunas especies pueden revertir su envejecimiento. Brillan en la oscuridad con bioluminiscencia y fluyen sin cerebro, pero con una belleza hipnótica.",
                        imagen: ""
                    },
                    {
                        nombre: "Lombriz",
                        tipo: "anfibio",
                        descripcion: "El labrador invisible del suelo. Aireador de la tierra, transforma residuos en fertilidad. Sin su labor silenciosa, los bosques no podrían crecer.",
                        imagen: ""
                    },
                    {
                        nombre: "Ajolote",
                        tipo: "anfibio",
                        descripcion: "El prodigio regenerativo. Puede reconstruir extremidades, corazón y partes del cerebro. Emblema de la resistencia biológica y símbolo cultural mexicano.",
                        imagen: ""
                    },
                    {
                        nombre: "Rana dardo",
                        tipo: "anfibio",
                        descripcion: "Explosión de color y veneno. Su toxina ha inspirado medicamentos, y su piel adorna los bosques tropicales con advertencia brillante. Tan bella como peligrosa.",
                        imagen: ""
                    },
                    {
                        nombre: "Ornitorrinco",
                        tipo: "semiacuático",
                        descripcion: "El enigma viviente. Mamífero que pone huevos, tiene pico de pato, veneno en sus patas y caza con electrolocalización. Un rompecabezas evolutivo que desafía la clasificación.",
                        imagen: ""
                    }
                ]
            },
            {
                reino: "Plantae",
                seresVivos: [
                    {
                        nombre: "Secuoyas",
                        tipo: "árbol",
                        descripcion: "Gigantes ancestrales de la Tierra. Pueden vivir más de 3.000 años y superar los 100 metros de altura. Sus troncos son pilares de la historia del planeta y refugio de biodiversidad entera.",
                        imagen: ""
                    },
                    {
                        nombre: "Eucalipto del arco iris",
                        tipo: "árbol",
                        descripcion: "Árbol de corteza multicolor que parece pintado por artistas celestiales. De rápido crecimiento y aroma purificante, es símbolo de vida tropical exuberante.",
                        imagen: ""
                    },
                    {
                        nombre: "Dracaena cinnabari",
                        tipo: "árbol",
                        descripcion: "El árbol de la sangre de dragón. Su resina roja ha sido usada en medicina, alquimia y rituales. Crece en paisajes extraterrestres como un guardián de lo sagrado.",
                        imagen: ""
                    },
                    {
                        nombre: "Lavanda",
                        tipo: "arbusto",
                        descripcion: "Esencia de la calma. Esta planta aromática emana propiedades relajantes y antisépticas, y sus flores violetas pintan campos enteros de serenidad.",
                        imagen: ""
                    },
                    {
                        nombre: "Zarzamora",
                        tipo: "arbusto",
                        descripcion: "Arbusto fértil y salvaje, sus frutos oscuros rebosan de antioxidantes. Sirve tanto a la cocina como a la medicina natural, siendo un regalo dulce y curativo de la tierra.",
                        imagen: ""
                    },
                    {
                        nombre: "Rosales",
                        tipo: "arbusto",
                        descripcion: "Emblema del amor y la belleza. Sus flores son poesía en pétalos, y sus aceites esenciales alimentan el alma y la piel. El arte de la naturaleza hecha planta.",
                        imagen: ""
                    },
                    {
                        nombre: "Hiedra venenosa",
                        tipo: "enredadera",
                        descripcion: "Trepa sin miedo y cubre muros con su verdor furtivo. Aunque causa irritación, su tenacidad la convierte en la reina del camuflaje vegetal.",
                        imagen: ""
                    },
                    {
                        nombre: "Nepenthes",
                        tipo: "enredadera",
                        descripcion: "Planta carnívora con jarras de trampa mortal. Atrae insectos como flores, pero los digiere como cazadora sigilosa. Una fusión entre belleza y terror botánico.",
                        imagen: ""
                    },
                    {
                        nombre: "Thunbergia alata",
                        tipo: "enredadera",
                        descripcion: "Explosión floral en muros y pérgolas. De crecimiento vertiginoso y flores vibrantes, es una obra viva de color en movimiento constante.",
                        imagen: ""
                    }
                ]
            }
        ]
    }
];

export default biodiversidad