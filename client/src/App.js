import axios from 'axios';

const urlPag = "http://localhost:9000/api/auth"

export async function registerUser (registroUsuario) {
  try {  
    const response = await axios({
          url: `${urlPag}/registro`,
          method: 'POST',
          data: registroUsuario
        })

        console.log(response)
        if(response.status === 201){
          console.log('Usuario registrado de manera exitosa.')
          alert(`${registroUsuario.email} registrado de manera exitosa.`)
        }
        return response
  } catch (e) {
        alert("No fue posible crear el usuario, ver consola para mas informacion")
        console.log(e)
  }

}

export async function loginUser (logueoUsuario) {
  try {
    const response = await axios({
      url: `${urlPag}/login`,
      method: 'POST',
      data: logueoUsuario
    })

    console.log(response)
    if(response.status === 200){
      alert(`Logueado correctamente, bienvenido/a ${logueoUsuario.email}`)
    }
    return response
  }  catch (e) {
      alert("Usuario o contraseña erroneos, intente nuevamente.")
      console.log(e)
  }
}
