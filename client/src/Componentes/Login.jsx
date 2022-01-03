import React, {useState} from "react";
import insta from './images/instagram.png';
import tweet from './images/twitter.png';
import deviant from './images/devianart.png';
import tiktok from './images/tiktok.png';
import '../index.css'
import Nav from './Navbar'
import Footer from './Footer';

const Login = ({handleLogin}) => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    }) 

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;


        setLoginData({...loginData, [name] : value})
    }

    const submitLogin = (e) => {

        e.preventDefault();
        handleLogin({...loginData})
        
    }
    return (
        <div>
        <Nav />
        <div className="forms">
            <div className="login-form">
                <h1>Iniciar sesion</h1>
                <form onSubmit={submitLogin}>
                    <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Contraseña" value={loginData.password} onChange={handleChange} required />
                    <button type="submit"> Ingresar </button>
                </form>
                <a href="registro" rel="noopener noreferrer"><h6>¿No estas registrado? ¡Crea una cuenta aca!</h6></a>
            </div>
            <div className="contactos">
                <div className="izq">

                    <a href="https://www.instagram.com/kakidraws_/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="" /><span>Instagram</span></a>
                </div>
                <div className="der">

                    <a href="https://twitter.com/kakidraws_" target="_blank" rel="noopener noreferrer"><img src={tweet} alt="" /><span>Twitter</span></a>
                </div>
                <div className="izq">

                    <a href="https://www.deviantart.com/kakidraws" target="_blank" rel="noopener noreferrer"><img src={deviant} alt="" /><span>Deviantart</span></a>
                </div>
                <div className="der">

                    <a href="https://www.tiktok.com/@kakidraws_?lang=es" target="_blank" rel="noopener noreferrer"><img src={tiktok} alt="" /><span>TikTok</span></a>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    );
};

export default Login