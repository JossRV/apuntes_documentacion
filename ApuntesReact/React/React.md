# <p align="center">React</p>

- ***JSX:*** Extension de JavaScript, contiene toda la funcionalidad en xml y html.
-  ***React:*** No es un Framework, es un conjunto de librerias para crear aplicaciones web (react) y moviles (react native).
-  ***Node:*** Entorno de desarrollo de JavaScript.
-  ***NPM:*** Gestor de paquetes - Node Package Manager.
-  ***NPX:*** Ejecutor de paquetes - Node Package Executor.
-  ***YARN:*** Gestor de paquetes - Optimizado.

## <p align="center">Instalar react</p>
- ### Con yarn
~~~
yarn create vite
"Nombre del proyecto"
*Seleccionar opcion react*
*seleccionar opcion JavaScript*
~~~
- ### Con npx
~~~
npm create vite@latest
"Nombre del proyecto"
*Seleccionar opcion react*
*Seleccionar opcion JS*
~~~

## <p align="center">informacion sobre los archivos y carpetas</p>
- **.eslintrc.cjs** - Archivo de configuracion de JavaScript.
- **.gitignore** - Ayuda a ignorar archivos y carpetas que no queremos subir al repositorio.
- **index.html** - Entrada a nuestra aplicación.
- **package.json** - Dependencias y extensiones que contiene nuestro proyecto.
- **vite.config.js** - Archivo de configuracion de vite.
- carpeta src, carpeta assets - contiene imagenes, archivos e iconos svg.

## <p align="center">Uso JavaScript ECMAS6 para react</p>
- **Hola mundo**:```console.log("hola mundo");```
- **Variables**:
```
var nombre ="Joss"
let edad = 22
const pi = 3.14

// var esta en deshuso porque causa algunos problemas 
// por lo tanto solo usaremos let y const
var apellido = "benitez"
console.log(apellido);//undefine


function obtenerEdad(){
    let estatura=172
    console.log(edad)
}
// console.log(estatura)
obteneredad();
```
-**Tipos de datos**:
```
let edad = 22   //number
let nombre = "joss" //string
let booleano = true //boolean
```
-**Template strings**:
```
let edad =22
let nombre ="joss"

function obtenerApellido(){
    return "Velazquez"
}
// esta es la manera tradicional
console.log("tu nombre es: " + nombre)
console.log("tu edad es: " + edad)


// usando template strings
console.log(`Tu nombre es: ${nombre} ${obtenerApellido()} y tu edad es: ${edad}`)
```
-**funciones**
```
// funcion
// las funciones solo deben tener una sola tarea
function saludar(){
    return "hola"
}

console.log(saludar())

// funcion anonima
let despedir = function (){
    return "adios"
}


console.log((function (params) {
    return 5+5
})())

// funciones flecha
// siempre son anonimas
let despedir1 =()=>{
    return "adios"
}

((params)=> {
    return 5+5
})()

// function()                   =>
// pesada                       ligera
// hacer referencias a this     no puede hacer referencia al objeto this
```
-**Parametros**
```
let saludar = (nombre) =>{
 return `Hola ${nombre}`
}

console.log(saludar("faty"))
console.log(saludar(5))

// parametros por defecto
let mostrarPersona = (nombre = "faty") =>{
return nombre
}
console.log(mostrarPersona()) // el nombre
console.log(mostrarPersona("andy")) // el el escrito aqui

// parametros mixtos

let division = (num1,num2,num3,num4=2) =>{

    return(num1+num2+num3)/num4
}
console.log(division(12,34,45)) //la division sera entre 2
console.log(division(12,34,45,4)) // la division sera entre 4 
```
-**arreglos**
```
let calificaciones = [11,22,33,44,55,66,77,88,99]
// let arr = new Array(11,22...)
calificaciones.push(100, 90, 80)


let aprobatorias = calificaciones.filter((calificacion)=>{
    return calificacion > 70
})
console.log(calificaciones)
console.log(aprobatorias)
```
-**Objetos iterales**
```
let alumno ={
    // claves   valores
    // llaves  
    // keys     values
    matricula: "191190060",
    nombres: "Jose Alberto",
    apellidos: "Velazquez Nava",
    semestre: "9no",
    direccion:{
        ciudad: "CDMX",
        alcaldia:"Tlahuac",
        pueblo: "San Nicolas Tetelco",
    },
    telefonos: [5525945177,5515120398]
}

console.log(alumno.matricula)
console.log(alumno.direccion.pueblo)
console.log(alumno.telefonos[1])
```
-**Desestructuracion de arreglos**
```
let calificaciones = [11,22,33,44,55,66,77,88,99]

let [once, ,treinta, , cincuenta, , setenta, , noventa] = calificaciones
console.log(once)
console.log(treinta)
console.log(cincuenta)
console.log(setenta)
console.log(noventa)

// desestructuracion de objetos

let alumno ={
    // claves   valores
    // llaves  
    // keys     values
    matricula: "11190090",
    nombres: "fatima andrea",
    apellidos: "Benitez Perez",
    semestre: "9no",
    direccion:{
        ciudad: "CDMX",
        alcaldia:"Tlahuac",
        pueblo: "San Andres Mixquic",
    },
    telefonos: [5525947437,5549280094]
}

let{semestre,direccion, telefonos} = alumno
let {alcaldia}=direccion
let [ ,tel2]=telefonos

console.log(semestre,alcaldia,telefonos)
```
-**promesas**
```
// promesas
// callback->una funcion que fue mandada como argumento a otra funcion

// function obtenerUsuario(id){

// }
// function obtenerId(){

// }
// obtenerUsuario(obtenerId())


function solution(inputString) {
   let palidromo = inputString.split();
   let palidromo1= palidromo.reverse();
   let palidromo2 = palidromo1.toString();
   return
    }
    console.log(solution("aabaa"));
```

## <p align="center">Informacion sobre los archivos y carpetas del proyecto</p>
- ***node_modules***: Carpeta que tiene todas las dependencias necesarias de nuestro poryecto para el desarrollo.
- ***public***: Carpeta que contiene archivos estaticos utilizados en nuestra aplicacion.
- ***src***: Carpeta donde almacenaremos recursos utilizados por nuestra aplicacion:
- ***src/assets***: Carpeta donde almacenaremos recursos utilizados por nuestra aplicacion.
- ***App.css***: Archivo de estilos para el componente App.
- ***App.jsx***: Archivo de definicion del componente App.
- ***index.css***: Archivo de estilos globales de la aplicacion.
- ***main.js***: Punto de entrada de nuestra aplicacion.
- ***.eslintrc.cjs***: Archivo de configuracion que nos ayudara a marcar los errores en nuestra app.
- ***.gitignore***: Archivo que usa el manejador de versiones git para ignorar carpetas y archivos que no entren en los commit.
- ***index.html***: Archivo en el cual se renderizan nuestros componentes.
- ***package.json***: Archivo que contiene todos los metadatos y dependencias que se desarrollan en toda la aplicacion.
- ***README.md***: Archivo con informacion relevante para el tratamiento de la aplicacion.
- ***vite.config***: Archivo principal para la configuracion, se puede cambiar o modificar.
- ***yarn.lock***: Archivo que define como fue contruido el proyecto al correr el comando yarn.
- ***package.lock.json***: Archivo que define como fue contruido el proyecto al correr el comando npm.
- ***Los componentes***: Es una pieza de interfaz de usuario UI, que tiene logica y apariencia, puede ser desde un boton hasta un componente grande como una pagina.

## <p align="center">Hooks</p>
- **state -> useState**: Todo lo que utilice *use* se llama hooks.
- **useState**: Es para guardar un estado.
```
const [state, setState] = useState(initialState)

const [state, setstate] = useState(false);
// En el state se guardo el estado agregado como parametro en useState
// state = false
```
- **state**: Es una variable que guarda el estado inicial del hook useState.
- **setstate**: Es una funcion que realiza el cambio a la variable del estado.

- **Funcionalidades**:
```
onClick()
onChange()
onSubmit()
onKeypress()
onKeyup
```
- **Propiedades**: props
```
// componente
<cardTarea/>
//componente con props
<cardTarea key={index} tarea={tarea}/>
```
-**key**: es un identificador para que no se repita.

- En la funcion se agrega el parametro con { } ya que estamos mandando un objeto
```
export imprime = ({props}) =>{
    console.log(props)
}
```
- **Context**: Nos permite comunicar entre los niveles mas altos a los niveles mas bajos.
- **Reducer**: Manejar estados mascomplejos, como añadir tareas, actualizar y eliminar tareas, esta utiliza una libreria redux.

## <p align="center">Local Storage</p>

- **Guardar** 
localStorage.setItem("hola","Mundo")

- **Guardar objeto**
```
localStorage.setItem("persona", JSON.stringify({
    nombre: "fernando"
}))
```

- **Leer**
```
localStorage.getItem("hola")
```

- **Leer objeto**
```
JSON.parse(localStorage.getItem("persona"))
```

- **guardar array**
```
localStorage.setItem("calificaciones", JSON.stringify([100,80,90]))
```

- **leer array**
```
localStorage.getItem("calificaciones").split(",")
```
Por lo mismo de que se guarda como una cadena el array, con el split podemos volverlo un arreglo

## <p align="center">Crear aplicacion compilada de react</p>

- **dist**: Carpeta que es la aplicacion compilada, se puede cambiar de nombre.
- **source**: Son todos los archivos que se necesita para crear una aplicacion compilada.

- Usar `yarn build` para generar la aplicacion compilada.
- despues de compilarse, corregir las direcciones de archivos e iconos en index.html del archivo compilado

ya construida el proyecto o bueno aplicacion, en git entras a configuracion, entrando al apartado pages, posteriormente en branch configuramos que rama queremos posteriormente seleccionamos la carpeta de aplicacion que creamos y guardamos

posteriormengte para acceder a la aplicacion, en la barra de busqueda se pone `nombre_usuario_git.github.io/tareas-app-react/`
- Crear proyecto `npx create-react-app tareas-app`
- Crear proyecto de otra forma `npm install -g create-react-app`
- Instalar dependencias `npm i`
- Crear aplicacion final `npm run build`
- Levantar servidor `npm start`
- En la compu o celular, instalar aplicacion
- En index agregar los . para que direccione bien los documentos e iconos
- Subir al repositorio git
- ya construida el proyecto o bueno aplicacion, en git entras a configuracion, entrando al apartado pages, posteriormente en branch configuramos que rama queremos posteriormente seleccionamos la carpeta de aplicacion que creamos y guardamos
- el react creado por npx, se puede instalar una aplicacion para dispositivos moviles o computadora, con vite no te permite instalar una aplicacion de tu codigo realizado.

<!-- cada que retorna el JSX
se considera un componente con mayusculas
Utiliza el JSX

El archivo mas importante es: index.js

DOM == document object model

## import React from 'react';
## import { createRoot } from 'react-dom/client';
Etiquetas importantes en el index

Se pueden utilizar variables con JSX por ejemplo:
let encabezado = <h1>Hello World!</h1>;
root.render(encabezado);

Para crear mas de 1 etiqueta hay de 2 formas, con el 
<div></div> o con la etiqueta vacia <></>


Descargar Bootstrap: npm install bootstrap

y para incluirlo es:
### import 'bootstrap/dist/css/bootstrap.min.css'

img, hr, br, meta, link -->

# async y await
