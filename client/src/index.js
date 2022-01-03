import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./Componentes/Home"
import Login from "./Componentes/Login"
import Registro from "./Componentes/Registro"
import Comisiones from "./Componentes/Comisiones";
import Acerca from "./Componentes/Acerca";
import Trabajos from "./Componentes/Trabajos";
import { registerUser, loginUser } from './App'
import './index.css';

const handleSubmit = (data) => {
  registerUser(data)
}

const handleLogin = (data) => {
  loginUser(data)
}

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login handleLogin={handleLogin} />} />
      <Route exact path="/registro" element={<Registro handleSubmit={handleSubmit} />} />
      <Route exact path="/comisiones" element={<Comisiones />} />
      <Route exact path="/acerca" element={<Acerca />} />
      <Route exact path="/trabajos" element={<Trabajos />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);