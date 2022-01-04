# Kakidraws - Santiago Nicolás Morelli
## UTN.FRBA Programador Web Avanzado

##### Acerca del proyecto en linea:

  El proyecto en deploy contiene funciona en su totalidad, la parte de registro y login por el momento solo cuenta con 
alertas que confirman si se logro con exito tanto el registro como el login como tambien contiene alertas por si esto no 
se logra. Se hizo un deploy distinto para cada parte de la aplicación, por un lado el front-end y por el otro el back-end. 
Estos dos deploy se encuentran conectados entre si por los modulos de axios y cors ambos de npm. El front-end en la parte
de los formularios se comunica con el back-end mediante axios y los metodos POST, de esta forma toman la respuesta del 
back-end y la envian al front-end asi tambien como se cargan los datos en la base de mongoDB.

##### En cuanto al proyecto en si:

  El proyecto es un portfolio creativo para una amiga. Cuenta con pagina de inicio que redirecciona al resto de las
paginas, pagina de informacion en 'Acerca de mi', pagina con los trabajos en exposición en 'Mis trabajos', una pequeña
tienda que redirecciona a la mensajeria directa de Instagram en 'Comisiones' y una pagina de contacto con formularios de 
inicio de sesión y registro y redirecciones a las redes sociales de la artista en cuestión.
  El proyecto cuenta con distintos media queries que posibilitan su visualización tanto en monitores full hd (1920x1080)
como en dispositivos moviles de menor resolución.

### Temas aplicados:

- HTML
  
  El cuerpo de la pagina se encuentra desarrollado en su totalidad en este lenguaje.

- React

  El codigo del proyecto esta contenido en componentes de React.js. Si bien escencialmente es html el mismo es renderizado 
por la aplicacion de React.js. A la hora de la implementacion del codigo html en la tecnologia React hay que hacer algunas 
modificicaciones, por ejemplo "Class" pasa a ser "className" dentro de las etiquetas de codigo que asi lo requieran.

- CSS

  El estilo de la pagina esta desarrollado en este lenguaje, parte en un archivo aparte 'index.css' y pequeños fragmentos
dentro de la pagina con el comando 'Style=""'.

- Bootstrap

  La pagina cuenta con elementos de Bootstrap en varias secciones como los formularios y la galeria de 'Mis trabajos'.
Tambien he incluido la función de Bootstrap Icons para el menu desplegable en movil y los iconos de redes sociales en el footer.

- MongoDB

  La base de datos utilizada fue MongoDB conectada con mongoose desde el backend (api) del sitio, contiene la tabla usuarios para el
registro y el login (usuario, email y contraseña). 

- JavaScript/NodeJS

  Los comandos de conexión a la base, los comandos de registro y login y estan hechos en este lenguaje. Se utilizaron los 
modulos de: bcryptjs, compression, cors, dotenv, express, express-validator, jsonwebtoken, moment, mongoose y axios.
  
- Google fonts

  La fuente del 'body' y algunos 'h' asi tambien como la fuente del 'logo Kakidraws' fue modificada con Google fonts.
