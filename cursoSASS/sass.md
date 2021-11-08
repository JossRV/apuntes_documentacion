para ocupar sass hay que tener nodejs

Actual, no concuerda con librerias,
LTS, si concuerda


Node js
es un entorno de ejecución, ejemplos es la consola de chrome o cualquier navegador

sass es un framework que permite utilizar mas sencillo css

node nos trae dos paquetes:

-> npm y para comprobar su version es: 'es un sistema de gestor de paquetes'->instalar paqueterias 
npm --version
-> npx: sirve para ejecutar los paquetes que se instalan en npm 
npx --version

la carpera de sass puede tener dos nombres:
sass o scss

comando para ejecutar el sass
## sass --watch scss/style.scss css/style.css


Comando para ejecutar archivos de node (permisos):
## Set-ExecutionPolicy Unrestricted

// extension se ocupa para reciclar la variable: @extends
// operadores:
para utilizar el math o operadores de */
se deben tener el 
# @use 'sass:math';

No se pueden multiplicar px * px
Se debe tener en cuenta cual es el divisor y el dividendo

Entonces, debe tener la siguiente estructura:

#### width: math.div($variableSN * 2,2);


# Import y use son para importar archivos

El que no tiene '_' es el archivo principal: se pueden tener mas de 1
pero solo se compila 1
puede tener cualquier nombre 

las variantes parciales '_' deben tener el nombre por ejemplo: _mixin.scss



