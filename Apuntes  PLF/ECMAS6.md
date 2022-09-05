Por qué es necesario tranformar el Código JavaScript
JavaScript es un lenguaje que no para de evolucionar y cada año agrega nuevas carcteristicas a su estándar, tambien conocido como emacscript.
El objetivo de ecmascript es desarrollar estándares y reportes técnicos para facilitar el uso de tecnologías de la información.

Ventajas de ECMAScript
Funciones de flechas MAP y SET
LET y CONST
CLASES
Operador función nula
metodos privados

BABEL
es eun compilador o traspilador para JavaScript. basicamente permite transformar codigo escrito con las ultimas y novedosas caracteristicas de javascript y transformarlo en un codigo que sea entendido por navegadores mas antiguos

Instalacion de babel
comando: npm install --save-dev @babel/core @babel/cli @babel/preset-env

En el archivo package.json 
agregamos
"scripts": {
	"build": "babel src -d controller"
}
 
Crearemos nuestro archivo .babelrc y agregamos
{
	"presets": ["@babel/preset-env"]
}
hola