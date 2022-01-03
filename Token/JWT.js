const jwt = require('jsonwebtoken');

const generarToken = (uid, name) =>{

    return new Promise((resolve, reject) =>{

        const payload = { uid, name };

        jwt.sign(payload, asd, {
            expiresIn: '90d'
        }, (err, token) =>{
            if(err){
                console.log(err);
                reject('Error generando token');
            }else{
                resolve(token);
            }
        });
    });
}

module.exports = {
    generarToken
}