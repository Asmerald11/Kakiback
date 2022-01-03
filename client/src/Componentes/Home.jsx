import React from "react";
import presentacion from './images/PortfolioPresentation.jpg'
import '../index.css'
import Cami from './images/cami_png.png';
import Nav from './Navbar'
import Footer from './Footer';

function Home() {
        return (
            <div>
            <Nav />
                <div className="Kaki">
                    <img src={presentacion} alt="" style={{ width: '100%', paddingBottom: '0px', borderRadius: '50px' }} />
                    <div id="texto">
                        <h1 className="titulo"><a href="/acerca">Acerca de mi</a></h1>
                        <br />
                        <br />
                        <h1 className="titulo"><a href="/trabajos">Mis trabajos</a></h1>
                        <br />
                        <br />
                        <h1 className="titulo"><a href="/comisiones">Comisiones</a></h1>
                        <br />
                        <br />
                        <h1 className="titulo"><a href="/login">Contacto</a></h1>
                    </div>
                    <div id="imagen">
                        <img src={Cami} alt="" style={{ width: '500px', height: '400px' }} />
                    </div>
                </div>
                <div className="Kakires">
                    <img src={presentacion} alt="" style={{ width: '100%', paddingBottom: '0px', borderRadius: '30px' }} />
                    <div id="texto">
                        <h1 className="titulo"><a href="/acerca">Acerca de mi</a></h1>
                    </div>
                    <div id="texto">
                        <h1 className="titulo"><a href="/trabajos">Mis trabajos</a></h1>
                    </div>
                    <div id="texto">
                        <h1 className="titulo"><a href="/comisiones">Comisiones</a></h1>
                    </div>
                    <div id="texto">
                        <h1 className="titulo"><a href="/login">Contacto</a></h1>
                    </div>
                    <div id="imagen">
                        <img src="/images/cami_png.png" alt="" style={{ width: '450px' }} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
;

export default Home;