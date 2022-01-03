const express = require('express');
const bcrypt = require('bcryptjs')
const Usuario = require('../models/Usuario');
const { generarToken } = require('../Token/JWT')


const crearUsuario = async (req, res = express.response) => {

    const { name, email, password } = req.body

    try {
        
        let usuario = await Usuario.findOne({email});
        
        if(usuario){
            return res.status(500).json({
                message: "Email en uso"
            })
        }

        usuario = new Usuario(req.body);

        salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        res.status(201).json({
            message: 'Usuario creado.',
            user: { name, email, password },
            uid: usuario.id,
        }
        );

    } catch (error) {
        res.status(500).json({
            "message": "Error, usuario no creado."
        })
    }
}

const userLogin = async (req, res) => {

    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({email})        

        if(!usuario){
            return res.status(400).json({
                message: "Usuario no registrado"
            })
        }

        const validarPassword = bcrypt.compareSync(password, usuario.password)

        if(!validarPassword){
            return res.status(400).json({
                message: "Contraseña incorrecta"
            })
        }

        res.status(200).json({
            message: 'Bienvenido',
            user: { email }
        });

    } catch (error) {
        res.status(500).json({
            "message": "Error al comparar los datos",
        })
    }
}

module.exports = {
    crearUsuario,
    userLogin
}