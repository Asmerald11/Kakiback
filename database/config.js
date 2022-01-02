const mongoose = require('mongoose');


const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://Asme:Baseutn21@cluster0.jjddp.mongodb.net/prueba?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connection correct')
    } catch (error) {
        console.log(error)
        throw new Error('Error en la conexion con la DB')
    }
}

module.exports = {
    dbConnection,
}
