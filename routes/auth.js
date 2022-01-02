const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const { 
    crearUsuario,
    userLogin
} = require('../controllers/auth');

router.post('/registro', 
    [
        check('name', "El nombre es obligatorio").not().isEmpty(),
        check('email', "Email invalido").isEmail().not().isEmpty(),
        check('password', "La contraseña debe tener al menos 6 caracteres").isLength({min: 6}),
    ]
, crearUsuario );

router.post('/login', 
[
    check('email').isEmail().withMessage({message: 'Email invalido',}),
    check('password', "La contraseña debe tener al menos 6 caracteres").isLength({min: 6})
],
userLogin)

module.exports = router;