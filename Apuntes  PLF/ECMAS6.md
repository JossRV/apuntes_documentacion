Por qué es necesario tranformar el Código JavaScript
JavaScript es un lenguaje que no para de evolucionar y cada año agrega nuevas carcteristicas a su estándar, tambien conocido como emacscript.
El objetivo de ecmascript es desarrollar estándares y reportes técnicos para facilitar el uso de tecnologías de la información.

Ventajas de ECMAScript
Funciones de flechas MAP y SET
LET y CONST
CLASES
Operador función nula
metodos privados
Caracteristicas:
propiedades, metodos y constructor

BABEL
es eun compilador o traspilador para JavaScript. basicamente permite transformar codigo escrito con las ultimas y novedosas caracteristicas de javascript y transformarlo en un codigo que sea entendido por navegadores mas antiguos

Instalacion de babel
comando: npm install --save-dev @babel/core @babel/cli @babel/preset-env

@babel/core <!--Paquete principal de babel-->
@babel/cli <!--Linea de comandos-->
@babel/preset-env <!--preset-->

En el archivo package.json 
agregamos
"scripts": {
	"build": "babel src -d controller --watch"
}
 El watch es para que en el run build compile automaticamente

Crearemos nuestro archivo .babelrc y agregamos
{
	"presets": ["@babel/preset-env"]
}

creación de un programa con herencia para extraer un arreglo de objetos

-constructor
-metodos 
-propiedades

instalación de webpack 
commands ({
	=> npm install --save-dev webpack
	=> npm install --save-dev webpack-cli
});

Se crea un archivo webpack.config.js en el que va a tener:
{
	const path = require('path');
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundel.js',
    path: path.join(__dirname, 'controller'),
  },
  mode: 'development'
};
}
Despues de esto se instala el loader: 
commands{
	=>npm install --save-dev babel-loader
}

