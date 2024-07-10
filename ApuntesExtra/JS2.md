# JavaScript
- La palabra reservada **let** por convencion construiremos las variebles usando esta palabra, solo es una regla para nosotros.
- Existen otras palabras reservadas como **var** indicando que es una variable y se puede modificar, **const** indicando que es una constante, no se puede volver a modificar.
```
	resultado = true + 45; 
```
- Esta operacion es **implicita** porque el `true` equivale a 1 por lo tanto se convierte y quedaria asi `1 + 45` por lo que da de resultado `46`.
- Inclusive con false daria una conversion de `0` por lo que el resultado seria `45`.

- **_NaN_** significa No a Number (no es un numero) 
- No hay que confundir la concatenacion en una resta, la concatenacion se hace con el signo `+`.
- Al usar otro sombolo para concatenar te marcara `NaN` debido que al hacer la operacion con otro signo operador esta detectara si es numero o cadena.

## Operadores complejos
- Son atajos que nos ayudan a tener nuestro codigo mas ordenado y mas eficiente.

- `+=` **Adiccion asignacion**: suma el valor de la derecha a la variable izquierda y retorna el nuevo valor.
- Ejemplo 
``let valor1 = 5;``
``valor1+=3;``
- Lo de arriba es lo mismo a esto
``valor1=valor1+3;``
- Resultado: 8 aplica en ambos.
- ``-=`` **Resta asignacion**: Resta el valor de la derecha a la valriable izquierda y retorna el nuevo valor.
- ``*=`` **Multiplicacion asignacion**: Multiplica el valor de la derecha a la variable izquierda y retorna el nuevo valor.
- ``/=``**Division asignacion**: Divide el valor de la variable a la variable izquierda y retorna el nuevo valor.
  
# Operadores de comparacion
- Nosotros queremos ejecutar pruebas de verdadero o falsas para actuar de acuerdo a aquellos resultados.
 
- ``===`` **Igual estricto (igual restrictivo)**: Comprobar si los valores izquierdo y derecho son identicos entre si.
- ``==`` **Igual que**: Comprobar si los valores izquierdo y derecho son identicos entre si.
- ``!==`` **Igual no estricto (diferente restrictivo)**: Comprueba si los valores izquierdo y derecho no son identicos entre si.
- ``!=`` **diferente que**: Comprueba se los valores de la izquierda y derecha no son identicos entre si.

$$Diferencias$$

- La diferencia es que en el restrictivo toma en cuenta el tipo de dato, si es entero debe ser entero identico, si es cadena debe ser cadena identico, mas sin embargo en igual que o diferente que, no toma en cuenta el tipo de dato, solo debe ser identica para asi dar un resultado verdadero o falso (true o false)

- **if** siempre evoluciona.
- Siempre empezamos con una pregunta if [y si].
- De esta pregunta se puede trabajar para el lado positivo y negativo.
- Pero se puede hacer mas preguntas usando la estructura if elseif else ya asi podemos seguir trbajando con esta particularidad de multiples preguntas.

- Recordar que javascript es un lenguaje interpretado, es identico a java pero toma mas fuerza en javascript
hacer comentarios con ``""`` o comillas simples `''` comilla invertida ` `` `


### Tupla  
- 2 elementos a comparar
```
		 true
    false || true
if( 4 > 5   ||   8 < 9){
	Dentro de if
}
```
- Entonces:
```
|| or
t o t = t
t o f = t
f o t = t
f o f = f
```
```
&& and
t y t = t
t y f = f
f y t = f
f y f = f
```

- Estructura del **if**
- Al momento de crear mi if primero tengo que tener mi pregunta y esta debe estar dentro de una parentesis para que lo tome en cuenta.
- Un if ternario siempre se representa con un ? al lado derecho de la pregunta y posteriormente sigue la respuesta en positivo, al lado de la respuesta positiva van los : para avisar que hay otra respuesta y finalizo poniendo la respuesta negativa.
``pregunta ? true : false``

### Funciones
- En java trabajabamos con un concepto Método 
- Metodo es lo mismo que funcion al hablarlo estariamos hablando de un metodo debido que su comportamiento es igual.
- Existen funciones declarativas y funciones de expresion
son simplemente un bloque de codigo destinado a una tarea especifica, esta tarea y su codigo se puede y debe reciclar.
- Las funciones declarativas se pueden trabajar de manera muy facil, que hay de funciones que retornan y no reciben dato, funciones que reciben dato y retorna y funciones que reciben dato y no retorna y otra que no recibe nada.
- `typeof` es una palabra reservada que especifica el tipo de dato que es.
- Recordando que JS al usarlo de manera nativa es un leguaje INTERPRETADO.
- Nuestro navegador va a leer todo lo que construyamos de arriba hacia abajo, no puedes usar cosas que no hayas construido, puedes crear un conflicto
<!-- - **_Hosting_**, tema viejo el error de querer usarlo antes de construirlo y no tener la seguridad y la certeza de que funcione. -->
- **ECMAScript** ellos son los que editan, estandarizan, le dan calidad al lenguaje hay diferentes versiones de ECMAScript
<!-- - En tema de hosting se realizaba hasta la version 5 de ECMAScript -->
- La red de logica no tiene un control concreto 
- por ejemplo: si se crea una etiqueta script antes de las funcionalidades por lo tanto se va a ejecutar primero.
- Vamos a estar usando ``var`` que es una palabra reservada para crear o definir variables
- Otro ejemplo: Es function que es una palabra reservada para definir funciones.

convecion de trabajo
1- Declarar y depsues usar

JS es una tecnologia de naturaleza asincrona, quiere decir que no todo necesita en el mismo momento.
Para que un lenguaje sea asincrona nos tiene que grantizar que revise que ya termino sus actividades y para saber se apoya en bucle, hasta que descubra que esta todo se pueda compilar y decir que esta terminado correctamente.

En resumen, nunca uses algo qu eno haz construido.

Segundo tipo de funciones son funciones de expresion
Se invocan igual que una funcion normal
Le puedes pasar o no parametros de invocacion
Varios autores la denominan como funciones anonimas
Aplican los 4 tipos de funciones que vimos en la vez pasada
Tambien hay una tipo corta y es la que mas usaremos

que se hace de esta manera 
==let tipo_corta = () => console.log();==  o
==let tipo_corta = () => "hola";==

`SCOPE`

`scope global`: fuera de toda funcion, osea en cada funcion puedo tener acceso a la variable que tengo fuera de la funcion.
`scope local`: esta dentro de una funcion y no tengo acceso a ello, por lo qeu me marcaria error

JS tiene una forma de manipular el contenido
herramientas selectores (estructura de seleccion)

%%Nuevo Apunte%% 										14/10/2021

Pensaremos que nosotros somos usuarios, usando una lapto que simula el sistema de entrada de un softwer, esta interfaz la controla el controlador, este controlador es un pequeño fracmento de software que monitorea u observa el comportamiento de la interfaz del usuario para saber que info nos proporciona para trabajar.
El modelo es la base de dato y esta trabaja en conjunto con el controlador para poder hacer maquetaciones y mas cosas interesantes.

label es una etiqueta de texto que muestra informacion.
input es un bloque en blanco qu epuedes insertar informacion, escribir datos, etc.

Convencion la nomenclatura de todos los botones es `btn_`
esta convencion aun que no la pida simplemente estara mal el ejercicio.
Los botones usaremos span.

Usar bootstrap (tiene un poder de capacidad de estructuracion, tiene capacidad relativa, artistica muy elevada y una capacidad funcional ).

Los colores de bootstrap en botones es 
-primary -> azul
-success -> verde
-warning -> amarillo
-danger -> rojo

antes usabamos el button de bootstrap y aparece de una forma muy cuadrada
`submit` : evento que pasa en la pagina, lo que sucede es que necesitas recargar la pagina para terminar de ejecutar.

En cambio la etiqueta span no requiere recarga si no que junto a js hace que solo recargue el elemento que tiene interes.

Idea de un cambio de paradigma radical.

Porque no es sano construir adentro de una function, la variable creada dentro de la funcion hace que la computadora tenga un problema de lagueo o se trabe debido que se sature el navegador.