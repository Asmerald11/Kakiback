import React from 'react';
import '../index.css'
import T6 from './images/Trabajo6.jpg';
import T4 from './images/Trabajo4.jpg';
import T3 from './images/Trabajo3.jpg';
import T7 from './images/Trabajo7.jpg';
import T5 from './images/Trabajo5.jpg';
import T2 from './images/Trabajo2.jpg';
import T1 from './images/Trabajo1.jpg';
import Cu1 from './images/cuadros1.jpg';
import Cu2 from './images/cuadros2.jpg';
import Cu3 from './images/cuadros3.jpg';
import Cu4 from './images/cuadros4.jpg';
import Cu5 from './images/cuadros5.jpg';
import Cu6 from './images/cuadros6.jpg';
import Cu7 from './images/cuadros7.jpg';
import Cu8 from './images/cuadros8.jpg';
import Cu9 from './images/cuadros9.jpg';
import Cu10 from './images/cuadros10.jpg';
import Cu11 from './images/cuadros11.jpg';
import F1 from './images/fanarts1.jpg';
import F2 from './images/fanarts2.jpg';
import F3 from './images/fanarts3.jpg';
import F4 from './images/fanarts4.jpg';
import F5 from './images/fanarts5.jpg';
import F6 from './images/fanarts6.jpg';
import F7 from './images/fanarts7.jpg';
import F8 from './images/fanarts8.jpg';
import F9 from './images/fanarts9.jpg';
import R1 from './images/real1.jpg';
import R2 from './images/real2.jpg';
import R3 from './images/real3.jpg';
import R4 from './images/real4.jpg';
import R5 from './images/real5.jpg';
import R6 from './images/real6.jpg';
import R7 from './images/real7.jpg';
import Co1 from './images/comision1.jpg';
import Co2 from './images/comision2.jpg';
import Co3 from './images/comision3.jpg';
import Co4 from './images/comision4.jpg';
import Co5 from './images/comision5.jpg';
import Co6 from './images/comision6.png';
import Co7 from './images/comision7.png';
import Co8 from './images/comision8.png';
import Nav from './Navbar'
import Footer from './Footer';


const Trabajos = () => {
    return (
        <div>
            <Nav />
            <h1 className="titulares">Yo y mis trabajos</h1>
            <div className="galeria">
                <div className="cuadro">
                    <a href={T6} target="_blank" rel="noreferrer"><img src={T6} alt="." width={600} height={400} /></a>
                    <div className="desc">Muestra de arte en el Centro Cultural Ernesto Sabato, 2018</div>
                </div>
                <div className="cuadro">
                    <a href={T4} target="_blank" rel="noreferrer"><img src={T4} alt="." width={600} height={400} /></a>
                    <div className="desc">Muestra de arte en el Centro Cultural Ernesto Sabato, 2019</div>
                </div>
                <div className="cuadro">
                    <a href={T3} target="_blank" rel="noreferrer"><img src={T3} alt="." width={600} height={400} /></a>
                    <div className="desc">Examen de 5to año en el Conservatorio Grassi</div>
                </div>
                <div className="cuadro">
                    <a href={T7} target="_blank" rel="noreferrer"><img src={T7} alt="." width={600} height={400} /></a>
                    <div className="desc">Concurso de pintura al aire libre patrocinado por APTHGRA</div>
                </div>
                <div className="cuadro">
                    <a href={T5} target="_blank" rel="noreferrer"><img src={T5} alt="." width={600} height={400} /></a>
                    <div className="desc">Clase de dibujo del Conservatorio Grassi en la sede de Pablo Podesta</div>
                </div>
                <div className="cuadro">
                    <a href={T2} target="_blank" rel="noreferrer"><img src={T2} alt="." width={600} height={400} /></a>
                    <div className="desc">Muestra de arte en el Centro Cultural Ernesto Sabato, 2019</div>
                </div>
                <div className="cuadro">
                    <a href={T1} target="_blank" rel="noreferrer"><img src={T1} alt="." width={600} height={400} /></a>
                    <div className="desc">Entrega de diplomas, Conservatorio Grassi 2019</div>
                </div>
            </div>
            <h1 className="titulares">Mis cuadros</h1>
            <div className="galeria">
                <div className="cuadro">
                    <a href={Cu1} target="_blank" rel="noreferrer"><img src={Cu1} alt="." width={600} height={400} /></a>
                    <div className="desc">Pintura al aire libre, acrilico sobre bastidor</div>
                </div>
                <div className="cuadro">
                    <a href={Cu2} target="_blank" rel="noreferrer"><img src={Cu2} alt="." width={600} height={400} /></a>
                    <div className="desc">Pintura de Marilina Bertoldi, oleo sobre bastidor</div>
                </div>
                <div className="cuadro">
                    <a href={Cu3} target="_blank" rel="noreferrer"><img src={Cu3} alt="." width={600} height={400} /></a>
                    <div className="desc">Copia de fanart de Kimi No Na Wa, oleo sobre bastidor, 40x60</div>
                </div>
                <div className="cuadro">
                    <a href={Cu4} target="_blank" rel="noreferrer"><img src={Cu4} alt="." width={600} height={400} /></a>
                    <div className="desc">Pintura de la tapa del disco "Blue Neighbourhood" de Troye Sivan, oleo sobre bastidor, 40x30</div>
                </div>
                <div className="cuadro">
                    <a href={Cu5} target="_blank" rel="noreferrer"><img src={Cu5} alt="." width={600} height={400} /></a>
                    <div className="desc">Pintura en tecnica "Grisalla", oleo sobre bastidor</div>
                </div>
                <div className="cuadro">
                    <a href={Cu6} target="_blank" rel="noreferrer"><img src={Cu6} alt="." width={600} height={400} /></a>
                    <div className="desc">Pintura abstracta, acrilico sobre bastidor</div>
                </div>
                <div className="cuadro">
                    <a href={Cu7} target="_blank" rel="noreferrer"><img src={Cu7} alt="." width={600} height={400} /></a>
                    <div className="desc">Pintura abstracta N°2, acrilico sobre bastidor</div>
                </div>
                <div className="cuadro">
                    <a href={Cu8} target="_blank" rel="noreferrer"><img src={Cu8} alt="." width={600} height={400} /></a>
                    <div className="desc">Pintura impresionista, oleo sobre bastidor</div>
                </div>
                <div className="cuadro">
                    <a href={Cu9} target="_blank" rel="noreferrer"><img src={Cu9} alt="." width={600} height={400} /></a>
                    <div className="desc">Naturaleza muerta N°1, oleo sobre bastidor</div>
                </div>
                <div className="cuadro">
                    <a href={Cu10} target="_blank" rel="noreferrer"><img src={Cu10} alt="." width={600} height={400} /></a>
                    <div className="desc">Naturaleza muerta N°2, oleo sobre bastidor</div>
                </div>
                <div className="cuadro">
                    <a href={Cu11} target="_blank" rel="noreferrer"><img src={Cu11} alt="." width={600} height={400} /></a>
                    <div className="desc">Copia impresionista del cuadro "Crepusculo en Venecia" de Claude Monet</div>
                </div>
            </div>
            <h1 className="titulares">Mis fanarts</h1>
            <div className="galeria">
                <div className="cuadro">
                    <a href={F1} target="_blank" rel="noreferrer"><img src={F1} alt="." width={600} height={400} /></a>
                    <div className="desc">Aqua de KonoSuba! - Kono Subarashii Sekai ni Shukufuku wo!</div>
                </div>
                <div className="cuadro">
                    <a href={F2} target="_blank" rel="noreferrer"><img src={F2} alt="." width={600} height={400} /></a>
                    <div className="desc">Cat in a box, copia de imagen viral en redes</div>
                </div>
                <div className="cuadro">
                    <a href={F3} target="_blank" rel="noreferrer"><img src={F3} alt="." width={600} height={400} /></a>
                    <div className="desc">Gon Freecs de HUNTERxHUNTER</div>
                </div>
                <div className="cuadro">
                    <a href={F4} target="_blank" rel="noreferrer"><img src={F4} alt="." width={600} height={400} /></a>
                    <div className="desc">Gloom, Pokémon</div>
                </div>
                <div className="cuadro">
                    <a href={F5} target="_blank" rel="noreferrer"><img src={F5} alt="." width={600} height={400} /></a>
                    <div className="desc">Sailor Uranus navideña, Sailor Moon</div>
                </div>
                <div className="cuadro">
                    <a href={F6} target="_blank" rel="noreferrer"><img src={F6} alt="." width={600} height={400} /></a>
                    <div className="desc">Gengar, Pokémon</div>
                </div>
                <div className="cuadro">
                    <a href={F7} target="_blank" rel="noreferrer"><img src={F7} alt="." width={600} height={400} /></a>
                    <div className="desc">Pikachu y Mr.Mime, Pokémon</div>
                </div>
                <div className="cuadro">
                    <a href={F8} target="_blank" rel="noreferrer"><img src={F8} alt="." width={600} height={400} /></a>
                    <div className="desc">Gon y Sobble, Pokémon</div>
                </div>
                <div className="cuadro">
                    <a href={F9} target="_blank" rel="noreferrer"><img src={F9} alt="." width={600} height={400} /></a>
                    <div className="desc">Shikamaru Nara, Naruto Shippuden</div>
                </div>
            </div>
            <h1 className="titulares">Mi trabajo realista</h1>
            <div className="galeria">
                <div className="cuadro">
                    <a href={R1} target="_blank" rel="noreferrer"><img src={R1} alt="." width={600} height={400} /></a>
                    <div className="desc">Retrato de la modelo - Cajsa Wessberg</div>
                </div>
                <div className="cuadro">
                    <a href={R2} target="_blank" rel="noreferrer"><img src={R2} alt="." width={600} height={400} /></a>
                    <div className="desc">Anya Taylor-Joy</div>
                </div>
                <div className="cuadro">
                    <a href={R3} target="_blank" rel="noreferrer"><img src={R3} alt="." width={600} height={400} /></a>
                    <div className="desc">Elton John</div>
                </div>
                <div className="cuadro">
                    <a href={R4} target="_blank" rel="noreferrer"><img src={R4} alt="." width={600} height={400} /></a>
                    <div className="desc">Proyecto personal - Calavera</div>
                </div>
                <div className="cuadro">
                    <a href={R5} target="_blank" rel="noreferrer"><img src={R5} alt="." width={600} height={400} /></a>
                    <div className="desc">Kai Sa - League of Legends</div>
                </div>
                <div className="cuadro">
                    <a href={R6} target="_blank" rel="noreferrer"><img src={R6} alt="." width={600} height={400} /></a>
                    <div className="desc">Mi hermana Constanza</div>
                </div>
                <div className="cuadro">
                    <a href={R7} target="_blank" rel="noreferrer"><img src={R7} alt="." width={600} height={400} /></a>
                    <div className="desc">Ojos realistas</div>
                </div>
            </div>
            <h1 className="titulares">Mis comisiones</h1>
            <div className="galeria">
                <div className="cuadro">
                    <a href={Co1} target="_blank" rel="noreferrer"><img src={Co1} alt="." width={600} height={400} /></a>
                    <div className="desc">Comision 1 - Mascotas</div>
                </div>
                <div className="cuadro">
                    <a href={Co2} target="_blank" rel="noreferrer"><img src={Co2} alt="." width={600} height={400} /></a>
                    <div className="desc">Comision 2 - Mascotas</div>
                </div>
                <div className="cuadro">
                    <a href={Co3} target="_blank" rel="noreferrer"><img src={Co3} alt="." width={600} height={400} /></a>
                    <div className="desc">Comision 3 - Mascotas</div>
                </div>
                <div className="cuadro">
                    <a href={Co4} target="_blank" rel="noreferrer"><img src={Co4} alt="." width={600} height={400} /></a>
                    <div className="desc">Comision 4 - Mascotas</div>
                </div>
                <div className="cuadro">
                    <a href={Co5} target="_blank" rel="noreferrer"><img src={Co5} alt="." width={600} height={400} /></a>
                    <div className="desc">Comision 5 - Mascotas</div>
                </div>
                <div className="cuadro">
                    <a href={Co6} target="_blank" rel="noreferrer"><img src={Co6} alt="." width={600} height={400} /></a>
                    <div className="desc">Comision 6 - Icono de perfil</div>
                </div>
                <div className="cuadro">
                    <a href={Co7} target="_blank" rel="noreferrer"><img src={Co7} alt="." width={600} height={400} /></a>
                    <div className="desc">Comision 7 - Icono de perfil</div>
                </div>
                <div className="cuadro">
                    <a href={Co8} target="_blank" rel="noreferrer"><img src={Co8} alt="." width={600} height={400} /></a>
                    <div className="desc">Comision 8 - Icono de perfil</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};


export default Trabajos;