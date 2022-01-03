import React, { useState } from "react";
import '../index.css'
import Nav from './Navbar'
import Footer from './Footer';

const Registro = ({ handleSubmit }) => {
    const [regData, setRegData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        setRegData({ ...regData, [name]: value })
    }

    const regUser = (e) => {

        e.preventDefault();
        handleSubmit({ ...regData });

    }

    return (
        <div>
            <Nav />
            <div className="forms">
                <div className="reg-form">
                    <h1>Registrarse</h1>
                    <form onSubmit={regUser}>
                        <input type="text" placeholder="Nombre" name="name" value={regData.name} onChange={handleChange} required />   
                        <input type="password" name="password" placeholder="Contraseña" value={regData.password} onChange={handleChange} required />
                        <input type="text" name="email" placeholder="Email" value={regData.email} onChange={handleChange} required />
                        <button type="submit"> Crear Cuenta </button>
                        <a href="/login" rel="noopener noreferrer"><h6>Volver</h6></a>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Registro