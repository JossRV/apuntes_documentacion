Servidor Http
Leguaje de programación
Formato JSON
EcmaScript 5

```
Ejemplo: https://pokeapi.co/api/v2/pokemon/ditto
```

Tecnologías: Node, Express, Mongo, Mongoose

Lo primero, crear un proyecto de Node
```
npm init
yarn init
```

Instalaciones Necesarias:
```
	yarn add express mongoose
	npm i -g nodemon
	yarn add dotenv
```

Se crea el archivo de entrada en raíz
`index.js`

Dentro de este archivo index.js
```
const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.json({
        ok:true
    })
})
//Buscar algun puerto que no se este ejecutando en ningun servicio
app.listen(3303,()=>{
    console.log("App escuchando")
})
```

`Levantar servidor HTTP {node index.js}`

*Una petición HTTP* :
- Linea de peticion
- Cabecera de la petición
- Cuerpo de la petición
- Respuesta HTTP

Dentro del package.json se pone:
```
 "scripts": {
    "start": "node index.js",
    "dev":"nodemon index.js"
  },
```

Una vez instalada nodemon: 
- Se utiliza el comando ``yarn dev``
Lo que hace nodemon es estar escuchando cambios dentro del archivo el cual se puso como index.js

Instalar MONGO
-> buscar mongodb
-> entrar a community
-> 

Se hace la configuración en el archivo config



Para saber el estatus: https://developer.mozilla.org/es/docs/Web/HTTP/Status

POSTMAN: es una herramiennta que nos permite hacer peticiones que no sean GET

crear proyecto react native

y instalar axios

dentro de la API se instala cors
