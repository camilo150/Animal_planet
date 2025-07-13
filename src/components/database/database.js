import AnabaenaImg from './../../assets/img/bacterias/Anabaena.jpg';
import SpirulinaImg from './../../assets/img/bacterias/Spirulina.jpg';
import NostocImg from './../../assets/img/bacterias/Nostoc.jpg';
import Prevotella from './../../assets/img/bacterias/Prevotella spp.jpg';
import FragilisImg from './../../assets/img/bacterias/Bacteroides fragilis.webp';
import Flavobacterium from './../../assets/img/bacterias/Flavobacterium spp.jpg';
import DeinococcusImg from './../../assets/img/arkeas/Deinococcus radiodurans.avif';
import ThermusImg from './../../assets/img/arkeas/Thermus aquaticus.jpg';
import Halobacterium from './../../assets/img/arkeas/Halobacterium salinarum.avif'
import Dracaena from "./../../assets/img/plantas/Dracaena cinnabari.jpg"
import Eucalipto from "./../../assets/img/plantas/Eucalipto del arco iris.webp"
import Hiedra from "./../../assets/img/plantas/Hiedra venenosa.jpg"
import Lavanda from "./../../assets/img/plantas/Lavanda.webp"
import Rosales from "./../../assets/img/plantas/Rosales.jpg"
import Nepenthes from "./../../assets/img/plantas/Nepenthes.webp"
import Secuoyas from "./../../assets/img/plantas/Secuoyas.jpg"
import Thunbergia from "./../../assets/img/plantas/Thunbergia alata.jpeg"
import Zarzamora from "./../../assets/img/plantas/Zarzamora.webp"
import Ajolote from "../../assets/img/animales/Ajolote.avif"
import Araña from "../../assets/img/animales/Araña.jpg"
import Ballena from "../../assets/img/animales/Ballena.jpg"
import Colibrí from "../../assets/img/animales/Colibrí.jpg"
import Escarabajo from "../../assets/img/animales/Escarabajo rinoceronte.webp"
import Exocoetus from "../../assets/img/animales/Exocoetus volitans.jpg"
import Halcón from "../../assets/img/animales/Halcón peregrino.avif"
import Lombriz from "../../assets/img/animales/Lombriz.webp"
import Medusa from "../../assets/img/animales/Medusa.jpg"
import Murciélago from "../../assets/img/animales/Murciélago.jpg"
import Ornitorrinco from "../../assets/img/animales/Ornitorrinco.jpg"
import Rana from "../../assets/img/animales/Rana dardo.jpg"
import Taipán from "../../assets/img/animales/Taipán occidental.jpg"
import Armillaria from "../../assets/img/hongos/armillaria-ostoyae.jpg"
import Pleurotus from "../../assets/img/hongos/pleurotus.jpg"
import Trametes from "../../assets/img/hongos/Trametes.jpg"
import Candida from "../../assets/img/hongos/Candida_albicans.jpg"
import Cordiceps from "../../assets/img/hongos/cordiceps.jpg"
import Laccaria from "../../assets/img/hongos/laccaria-bicolor.jpg"
import Large from "../../assets/img/hongos/large.jpeg"
import Reseau from "../../assets/img/hongos/Réseau_de_mycorhize.jpg"
import Stem_rust from "../../assets/img/hongos/Stem_rust_close_up.jpg"
import Suillus from "../../assets/img/hongos/suillus-luteus.jpg"
import Usnea from "../../assets/img/hongos/Usnea_barbata.jpg"
import Xanthoria from "../../assets/img/hongos/Xanthoria parietina.jpg"
import pinguino from "../../assets/img/animales/pinguino.avif"
import Morsa from "../../assets/img/animales/Morsa.webp"
import Amoeba from "../../assets/img/protistas/Amoeba_proteus.jpg"
import Entamoeba from "../../assets/img/protistas/Entamoeba histolytica.jpg"
import Naegleria from "../../assets/img/protistas/Naegleria fowleri.webp"
import Paramecium from "../../assets/img/protistas/Paramecium_caudatum.jpg"
import Blepharisma from "../../assets/img/protistas/Blepharisma japonicum.jpg"
import Vorticella from "../../assets/img/protistas/Vorticella campanula.jpeg"
import Trypanosoma from "../../assets/img/protistas/Trypanosoma_brucei.jpg"
import Euglena from "../../assets/img/protistas/Euglena_gracilis.jpeg"
import Giardia from "../../assets/img/protistas/Giardia lamblia.jpg"
import Coscinodiscus from "../../assets/img/chromistas/Coscinodiscus.jpeg"
import Navicula from "../../assets/img/chromistas/Navicula.jpg"
import Thalassiosira from "../../assets/img/chromistas/Thalassiosira.jpg"
import Pythium from "../../assets/img/chromistas/Pythium ultimum.jpg"
import Phytophthora from "../../assets/img/chromistas/Phytophthora.jpg"
import Saprolegnia from "../../assets/img/chromistas/Saprolegnia parasitica.jpg"
import Macrocystis from "../../assets/img/chromistas/Macrocystis pyrifera.jpg"
import Sargassum from "../../assets/img/chromistas/Sargassum natans.jpg"
import Fucus from "../../assets/img/chromistas/Fucus vesiculosus.jpeg"





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
                        nombre: "Murciélago",
                        tipo: "aéreo",
                        descripcion: "El único mamífero volador, navega en la oscuridad con ecolocalización. Polinizador nocturno y devorador de plagas, sostiene ecosistemas y cosechas con alas silenciosas.",
                        imagen: Murciélago
                    },
                    {
                        nombre: "Halcón peregrino",
                        tipo: "aéreo",
                        descripcion: "El rayo del cielo. Ave más veloz del mundo, alcanza más de 320 km/h en picada. Su vuelo es un poema de aerodinámica letal, símbolo de precisión y poder natural.",
                        imagen: Halcón
                    },
                    {
                        nombre: "Colibrí",
                        tipo: "aéreo",
                        descripcion: "Una chispa de energía viva. Capaz de volar en todas direcciones con alas que baten más de 50 veces por segundo. Vital en la polinización, es el mensajero vibrante de los jardines tropicales.",
                        imagen: Colibrí
                    },
                    {
                        nombre: "Taipán occidental",
                        tipo: "terrestre",
                        descripcion: "La serpiente más venenosa del planeta. Su veneno puede acabar con 100 humanos en minutos, pero rara vez muerde. Es el sigiloso centinela del desierto australiano, veloz como el rayo, letal como la sombra.",
                        imagen: Taipán
                    },
                    {
                        nombre: "Escarabajo rinoceronte",
                        tipo: "terrestre",
                        descripcion: "El titán de los insectos. Posee una fuerza descomunal capaz de levantar 850 veces su peso. Es el Hércules del mundo miniatura, símbolo de resistencia y evolución poderosa.",
                        imagen: Escarabajo
                    },
                    {
                        nombre: "Araña",
                        tipo: "terrestre",
                        descripcion: "Tejedora suprema del equilibrio ecológico. Su seda es más fuerte que el acero por peso, y su instinto cazador mantiene a raya poblaciones de insectos. Una ingeniera letal y elegante de la naturaleza.",
                        imagen: Araña
                    },
                    {
                        nombre: "Lombriz",
                        tipo: "anfibio",
                        descripcion: "El labrador invisible del suelo. Aireador de la tierra, transforma residuos en fertilidad. Sin su labor silenciosa, los bosques no podrían crecer.",
                        imagen: Lombriz
                    },
                    {
                        nombre: "Ajolote",
                        tipo: "anfibio",
                        descripcion: "El prodigio regenerativo. Puede reconstruir extremidades, corazón y partes del cerebro. Emblema de la resistencia biológica y símbolo cultural mexicano.",
                        imagen: Ajolote
                    },
                    {
                        nombre: "Rana dardo",
                        tipo: "anfibio",
                        descripcion: "Explosión de color y veneno. Su toxina ha inspirado medicamentos, y su piel adorna los bosques tropicales con advertencia brillante. Tan bella como peligrosa.",
                        imagen: Rana
                    },
                    {
                        nombre: "Ornitorrinco",
                        tipo: "semiacuático",
                        descripcion: "El enigma viviente. Mamífero que pone huevos, tiene pico de pato, veneno en sus patas y caza con electrolocalización. Un rompecabezas evolutivo que desafía la clasificación.",
                        imagen: Ornitorrinco
                    },
                    {
                        nombre: "Pingüino",
                        tipo: "semiacuático",
                        descripcion: "Es conocido principalmente por el singular ciclo reproductivo de los adultos que repiten cada año, un largo viaje para aparearse y para alimentar a sus crías realizando caminatas de entre cincuenta y ciento veinte kilómetros. Es la única especie de pingüino que se reproduce durante el crudo invierno antártico",
                        imagen: pinguino
                    },
                    {
                        nombre: "Morsa",
                        tipo: "semiacuático",
                        descripcion: "El enigma viviente. Mamífero que pone huevos, tiene pico de pato, veneno en sus patas y caza con electrolocalización. Un rompecabezas evolutivo que desafía la clasificación.",
                        imagen: Morsa
                    },
                    {
                        nombre: "Ballena",
                        tipo: "acuático",
                        descripcion: "El gigante del planeta. Canta con frecuencias inaudibles para el ser humano, viaja miles de kilómetros y mantiene el ciclo del carbono marino. Su presencia es monumental y casi mitológica.",
                        imagen: Ballena
                    },
                    {
                        nombre: "Exocoetus volitans",
                        tipo: "acuático",
                        descripcion: "El pez que quiso volar. Planea por encima del agua hasta 200 metros para evadir depredadores. Una maravilla evolutiva entre dos mundos.",
                        imagen: Exocoetus
                    },
                    {
                        nombre: "Medusa",
                        tipo: "acuático",
                        descripcion: "Fantasma inmortal del océano. Algunas especies pueden revertir su envejecimiento. Brillan en la oscuridad con bioluminiscencia y fluyen sin cerebro, pero con una belleza hipnótica.",
                        imagen: Medusa
                    }
                ]
            },
            {
                reino: "Plantae",
                seresVivos: [
                    {
                        nombre: "Secuoyas",
                        tipo: "Arbol",
                        descripcion: "Gigantes ancestrales de la Tierra. Pueden vivir más de 3.000 años y superar los 100 metros de altura. Sus troncos son pilares de la historia del planeta y refugio de biodiversidad entera.",
                        imagen: Secuoyas
                    },
                    {
                        nombre: "Eucalipto del arco iris",
                        tipo: "Arbol",
                        descripcion: "Árbol de corteza multicolor que parece pintado por artistas celestiales. De rápido crecimiento y aroma purificante, es símbolo de vida tropical exuberante.",
                        imagen: Eucalipto
                    },
                    {
                        nombre: "Dracaena cinnabari",
                        tipo: "Arbol",
                        descripcion: "El árbol de la sangre de dragón. Su resina roja ha sido usada en medicina, alquimia y rituales. Crece en paisajes extraterrestres como un guardián de lo sagrado.",
                        imagen: Dracaena
                    },
                    {
                        nombre: "Lavanda",
                        tipo: "Arbusto",
                        descripcion: "Esencia de la calma. Esta planta aromática emana propiedades relajantes y antisépticas, y sus flores violetas pintan campos enteros de serenidad.",
                        imagen: Lavanda
                    },
                    {
                        nombre: "Zarzamora",
                        tipo: "Arbusto",
                        descripcion: "Arbusto fértil y salvaje, sus frutos oscuros rebosan de antioxidantes. Sirve tanto a la cocina como a la medicina natural, siendo un regalo dulce y curativo de la tierra.",
                        imagen: Zarzamora
                    },
                    {
                        nombre: "Rosales",
                        tipo: "Arbusto",
                        descripcion: "Emblema del amor y la belleza. Sus flores son poesía en pétalos, y sus aceites esenciales alimentan el alma y la piel. El arte de la naturaleza hecha planta.",
                        imagen: Rosales
                    },
                    {
                        nombre: "Hiedra venenosa",
                        tipo: "Enredadera",
                        descripcion: "Trepa sin miedo y cubre muros con su verdor furtivo. Aunque causa irritación, su tenacidad la convierte en la reina del camuflaje vegetal.",
                        imagen: Hiedra
                    },
                    {
                        nombre: "Nepenthes",
                        tipo: "Enredadera",
                        descripcion: "Planta carnívora con jarras de trampa mortal. Atrae insectos como flores, pero los digiere como cazadora sigilosa. Una fusión entre belleza y terror botánico.",
                        imagen: Nepenthes
                    },
                    {
                        nombre: "Thunbergia alata",
                        tipo: "Enredadera",
                        descripcion: "Explosión floral en muros y pérgolas. De crecimiento vertiginoso y flores vibrantes, es una obra viva de color en movimiento constante.",
                        imagen: Thunbergia
                    }
                ]
            },
            {
                reino: 'Fungi',
                seresVivos: [
                    {
                        nombre: "Armillaria ostoyae",
                        tipo: "Saprófito",
                        descripcion: "Este hongo es famoso porque su micelio subterráneo se extiende por más de 965 hectáreas (casi 10 km²), lo que lo convierte en el organismo más grande del planeta en extensión física continua. Aunque desde la superficie solo se ven pequeños cuerpos fructíferos (setas), debajo de la tierra crece una red inmensa de filamentos que descomponen raíces y troncos muertos. Además, se estima que tiene más de 2.400 años de antigüedad, lo que lo convierte en uno de los seres vivos más longevos del planeta.",
                        imagen: Armillaria
                    },
                    {
                        nombre: "Pleurotus ostreatus",
                        tipo: "Saprófito",
                        descripcion: "no solo es un hongo comestible muy nutritivo y sabroso, sino que es también un organismo reciclador excepcional. Tiene la capacidad de degradar compuestos contaminantes, como hidrocarburos del petróleo, pesticidas e incluso plásticos, lo que lo convierte en una herramienta valiosa para la biorremediación ambiental. Además, al crecer fácilmente sobre residuos vegetales y convertirlos en alimento comestible, representa una solución ecológica y sostenible frente al desperdicio agrícola",
                        imagen: Pleurotus
                    },
                    {
                        nombre: "Trametes versicolor ",
                        tipo: "Saprófito",
                        descripcion: "Trametes versicolor no solo es visualmente espectacular por sus bandas de colores que parecen plumas de pavo real, sino que también es un potente descomponedor de madera. Produce enzimas capaces de degradar lignina, uno de los componentes más resistentes de las plantas, permitiendo reciclar nutrientes que de otro modo quedarían atrapados. Además, ha sido ampliamente estudiado en medicina natural y oncológica, ya que ciertos compuestos presentes en él (como el polisacárido K) estimulan el sistema inmunológico y son usados como complemento en tratamientos contra el cáncer, especialmente en Asia.",
                        imagen: Trametes
                    },
                    {
                        nombre: "Rhizophagus irregularis",
                        tipo: "Micorrizógenos ",
                        descripcion: "Este hongo forma micorrizas arbusculares con una amplia variedad de plantas. Su micelio penetra las raíces y forma estructuras llamadas arbúsculos, facilitando la absorción de fósforo, nitrógeno y agua. A cambio, recibe azúcares. Sin él, el crecimiento de muchos cultivos sería mucho más pobre, y los suelos menos fértiles. Es clave para la agricultura ecológica y la restauración de suelos degradados",
                        imagen: Reseau
                    },
                    {
                        nombre: "Micorrizógenos ",
                        tipo: "Micorrizógenos ",
                        descripcion: "Este hongo forma micorrizas ectotróficas con árboles como el pino y el abeto, envolviendo sus raíces pero sin penetrarlas. Facilita la absorción de minerales del suelo y ayuda a los árboles a resistir sequías y patógenos. Además, puede atraer bacterias beneficiosas al entorno radicular, creando una comunidad cooperativa subterránea.",
                        imagen: Laccaria
                    },
                    {
                        nombre: "Suillus luteus ",
                        tipo: "Micorrizógenos ",
                        descripcion: "Este hongo forma relaciones muy estrechas con especies del género Pinus, especialmente en su juventud. Es usado frecuentemente en reforestación, ya que acelera el crecimiento y mejora la salud de los árboles jóvenes.",
                        imagen: Suillus
                    },
                    {
                        nombre: "Cladonia rangiferina",
                        tipo: "Liquenizados ",
                        descripcion: "soporta fríos intensos y largos períodos de desecación. Es la principal fuente de alimento para renos y caribúes durante el invierno. Su capacidad de deshidratarse totalmente y revivir al contacto con agua lo hace un superviviente admirable.",
                        imagen: Large
                    },
                    {
                        nombre: "Usnea barbata",
                        tipo: "Liquenizados ",
                        descripcion: " crece solo en ambientes con aire muy limpio. Si el aire está contaminado, no puede sobrevivir, por lo que es usado como bioindicador ambiental. También tiene propiedades antibióticas y se usa en medicina natural.",
                        imagen: Usnea
                    },
                    {
                        nombre: "Xanthoria parietina",
                        tipo: "Liquenizados ",
                        descripcion: "brilla intensamente por su contenido de parietina, un pigmento protector contra radiación UV. Puede crecer en superficies áridas y soleadas donde otros organismos no sobrevivirían, y también se ha estudiado por su capacidad de resistir condiciones espaciales.",
                        imagen: Xanthoria
                    },
                    {
                        nombre: "Ophiocordyceps unilateralis",
                        tipo: "Parasitarios",
                        descripcion: "Este hongo invade el cuerpo de hormigas y controla su comportamiento, obligándolas a trepar y morir en lugares estratégicos donde el hongo pueda reproducirse. Su mecanismo es tan preciso que parece ciencia ficción, y es uno de los mejores ejemplos de parasitismo especializado en la naturaleza.",
                        imagen: Cordiceps
                    },
                    {
                        nombre: "Puccinia graminis",
                        tipo: "Parasitarios",
                        descripcion: "Este hongo parásito infecta trigo y cebada, formando pústulas rojizas en los tallos. Es responsable de grandes pérdidas agrícolas en todo el mundo. Es muy difícil de erradicar y ha coevolucionado con las plantas huésped, desarrollando nuevas cepas resistentes a los fungicidas.",
                        imagen: Stem_rust
                    },
                    {
                        nombre: "Candida albicans",
                        tipo: "Parasitarios",
                        descripcion: "Aunque normalmente vive sin causar daño, si el sistema inmune se debilita o se altera la microbiota (por antibióticos, por ejemplo), Candida puede multiplicarse y causar candidiasis, afectando la boca, genitales o incluso órganos internos. Es un hongo parásito oportunista, muy común y clínicamente importante.",
                        imagen: Candida
                    }
                ]

            },
            {
                reino: "Protista",
                seresVivos: [
                    {
                        classe: "Protozoos",
                        A: [
                            {
                                clase: "Protozoos",
                                nombre: "Amoeba proteus",
                                tipo: "Protozoo",
                                descripcion: "Un ingeniero de microcosmos. Con su forma cambiante y pseudópodos, captura presas y se adapta a su entorno. Un símbolo de la flexibilidad celular.",
                                imagen: Amoeba
                            },
                            {
                                nombre: "Entamoeba histolytica",
                                tipo: "Protozoo",
                                descripcion: "Un viajero microscópico. Con su forma ameboide, se desplaza por su entorno en busca de alimento.",
                                imagen: Entamoeba
                            },
                            {
                                nombre: "Naegleria fowleri",
                                tipo: "Protozoo",
                                descripcion: "El cazador de agua dulce. Con su forma ameboide, se desplaza por su entorno en busca de alimento. Un viajero microscópico que puede ser mortal.",
                                imagen: Naegleria
                            }
                        ]
                    },
                    {
                        classe: "Ciliados",
                        A: [
                            {
                                nombre: "Paramecium caudatum",
                                tipo: "Ciliado",
                                descripcion: "El nadador ciliado. Con sus miles de cilios, se desplaza con gracia por el agua, alimentándose de bacterias y algas. Un ballet microscópico en acción.",
                                imagen: Paramecium
                            },
                            {
                                nombre: "blepharisma japonicum",
                                tipo: "Ciliado",
                                descripcion: "Un ciliado de forma alargada y colorida, que se desplaza por el agua con sus cilios. Se alimenta de bacterias y otros microorganismos.",
                                imagen: Blepharisma
                            },
                            {
                                nombre: "vorticella campanula",
                                tipo: "Ciliado",
                                descripcion: "Un ciliado con forma de campana que se adhiere a superficies acuáticas. Con sus cilios, crea corrientes de agua para capturar partículas de alimento.",
                                imagen: Vorticella
                            },
                        ]
                    },
                    {
                        classe: "Flagelados",
                        A: [
                            {
                                nombre: "Euglena gracilis",
                                tipo: "Flagelado",
                                descripcion: "El híbrido verde. Con cloroplastos para fotosíntesis y flagelos para nadar, es un puente entre plantas y animales. Un ejemplo de adaptabilidad evolutiva.",
                                imagen: Euglena
                            },
                            {
                                nombre: "Trypanosoma brucei",
                                tipo: "Flagelado",
                                descripcion: "El parásito del sueño. Con su forma alargada y flagelos, se desplaza en fluidos corporales y puede causar enfermedades graves en humanos y animales.",
                                imagen: Trypanosoma
                            },
                            {
                                nombre: "giardia lamblia",
                                tipo: "Flagelado",
                                descripcion: "El parásito intestinal. Con su forma de pera y flagelos, se adhiere a las paredes intestinales y puede causar enfermedades gastrointestinales.",
                                imagen: Giardia
                            }

                        ]
                    }
                ]
            },
            {
                reino: "Chromista",
                seresVivos: [
                    {
                        classe: "Diatomeas",
                        A: [
                            {
                                nombre: "Coscinodiscus",
                                tipo: "Diatomea",
                                descripcion: "Un mosaico de silicio. Con su estructura de vidrio, forma patrones geométricos únicos. Un microarquitecto del océano.",
                                imagen: Coscinodiscus
                            },
                            {
                                nombre: "Navicula",
                                tipo: "Diatomea",
                                descripcion: "Un barco de silicio. Con su forma alargada y simétrica, navega por las aguas dulces y saladas, creando belleza microscópica.",
                                imagen: Navicula
                            },
                            {
                                nombre: "Thalassiosira",
                                tipo: "Diatomea",
                                descripcion: "Un faro de luz. Con sus estructuras radiadas, refleja la luz del sol y crea patrones brillantes en el agua.",
                                imagen: Thalassiosira
                            }
                        ]
                    },
                    {
                        classe: "Oomycetes",
                        A: [
                            {
                                nombre: "Pythium ultimum",
                                tipo: "Oomycete",
                                descripcion: "El destructor de raíces. Con sus hifas filamentosas, invade raíces de plantas y causa enfermedades devastadoras en cultivos.",
                                imagen: Pythium
                            },
                            {
                                nombre: "Phytophthora infestans",
                                tipo: "Oomycete",
                                descripcion: "El enemigo del tomate. Con sus esporas, infecta cultivos de tomate y papa, causando pérdidas masivas en la agricultura.",
                                imagen: Phytophthora
                            },
                            {
                                nombre: "Saprolegnia parasitica",
                                tipo: "Oomycete",
                                descripcion: "El parásito acuático. Con sus hifas filamentosas, infecta peces y otros organismos acuáticos, causando enfermedades graves.",
                                imagen: Saprolegnia
                            }
                        ]
                    },
                    {
                        classe: "Algas pardas",
                        A: [
                            {
                                nombre: "Macrocystis pyrifera",
                                tipo: "Alga parda",
                                descripcion: "La selva marina gigante. Con sus largas frondas, forma bosques submarinos que albergan una rica biodiversidad.",
                                imagen: Macrocystis
                            },
                            {
                                nombre: "Fucus vesiculosus",
                                tipo: "Alga parda",
                                descripcion: "El fucus burbujeante. Con sus vesículas de gas, flota en la superficie del agua y forma hábitats para diversas especies.",
                                imagen: Fucus
                            },
                            {
                                nombre: "Sargassum muticum",
                                tipo: "Alga parda",
                                descripcion: "El sargazo invasor. Con sus largas frondas y flotadores, forma extensas masas en la superficie del agua, afectando ecosistemas costeros.",
                                imagen: Sargassum
                            }

                        ]
                    }
                ]
            }
        ]
    }
]

    export default biodiversidad