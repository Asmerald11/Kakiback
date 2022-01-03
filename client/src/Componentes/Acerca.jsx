import React from "react";
import acerca from './images/cam.jpg';
import '../index.css';
import Nav from './Navbar'
import Footer from './Footer';

const Acerca = () => {
    return (
        <div className="cuerpo">
        <Nav />
            <div className="iacerca">
                <h1>MI NOMBRE ES CAMILA CASOLATI Y SOY ARTISTA</h1>
                <p>
                    Me introduje en el mundo del arte a una edad temprana cuando decidí aprender danza jazz. Luego estudie
                    dibujo y pintura en el conservatorio Grassi, realice un curso de dibujo digital en la Universidad Da
                    Vinci, fui parte de exposiciones de arte y concursos tanto de pintura al aire libre como digitales.
                    Actualmente me encuentro estudiando en el Instituto Berni profesorado de Artes Visuales y trabajando de
                    manera independiente como artista realizando trabajos particulares mediante comisiones.
                    <br />
                    <br />
                    Tengo un buen manejo de redes, edición y compaginación de fotos y vídeos, fui parte de coordinaciones de
                    eventos solidarios, tengo practica en dibujo digital y pintura con acrílico u oleos y por último tengo
                    conocimientos amateurs con respecto a la fotografía. Se utilizar programas de edición y dibujo, tales
                    como el Adobe Photoshop CS6, Flash Professional, Sony Vegas Pro, Movie Maker, Corel Painter,
                    Illustrator, entre otros.
                </p>
                <img src={acerca} alt="" />
            </div>
            <Footer />
        </div>
    );
};

export default Acerca;