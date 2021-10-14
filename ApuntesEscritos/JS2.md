																						01/10/2021
La palabra reservada let por convencion construiremos las variebles usando esta palabra, solo es una regla para nosotros.

resultado = true +45; 
esta operacion es implicita porque el true equivale a 1 por lo tanto se vconvierte y quedaria asi 1+45 por lo que da de resultado 46.
inclusive con false daria una conversion de 0 por lo que el resultado seria 45.

NaN significa No a Number (no es un numero), no hay que confundir la concatenacion en una resta, la concatenacion se hace con el signo +
al usar otro te marcara NaN debido que al hacer la operacion con otro signo operador esta detectara si es numero o cadena.

Operadores complejos
Son atajos que nos ayudan a tener nuestro codigo mas ordenado y mas eficiente.

+= Adiccion asignacion
Suma el valor de la derecha a la variable izquierda y retorna el nuevo valor.
ejemplo 
let valor1 = 5;
valor1+=3;
lo de arriba es lo mismo a esto
valor1=valor1+3;
Resultado: 8 aplica en ambos.
-= Resta asignacion
Resta el valor de la derecha a la valriable izquierda y retorna el nuevo valor.
*= Multiplicacion asignacion
Multiplica el valor de la derecha a la variable izquierda y retorna el nuevo valor.
/=Division asignacion
Divide el valor de la variable a la variable izquierda y retorna el nuevo valor.


 Operadores de comparacion
 Nosotros queremos ejecutar pruebas de verdadero o fasi para actuar de acuerdo a aquellos resultados.
 
=== Igual estricto (igual restrictivo)
Comprobar si los valores izquierdo y derecho son identicos entre si 
= = igual que
Comprobar si los valores izquierdo y derecho son identicos entre si
!== Igual no estricto (diferente restrictivo)
Comprueba si los valores izquierdo y derecho no son identicos entre si
!= diferente que 
Comprueba se los valores de la izquierda y derecha no son identicos entre si 
==Diferencias== 
[
La diferencia es que en el restrictivo toma en cuenta el tipo de dato, si es entero debe ser entero identico, si es cadena debe ser cadena identico, mas sin embargo en igual que o diferente que, no toma en cuenta el tipo de dato, solo debe ser identic para asi dar un resultado verdadero o falso (true o false)
]

if siempre evoluciona
Siempre empezamos con una pregunta if [y si]
De esta pregunta se puede trabajar para el lado positivo y negativo
Pero se puede hacer mas preguntas usando la estructura if elseif else ya asi podemos seguir trbajando con esta particularidad de multiples preguntas

Recordar que javascript es un lenguaje interpretado, es identico a java pero toma mas fuerza en javascript
hacer comentarios con "" o comillas simples invertidas [  `comilla invertida`]


Tupla  
2 elementos a comparar

			 true
    false || true
if( 4 > 5   ||   8 < 9){
	Dentro de if
}

entonces 
||
t o t = t
t o f = t
f o t = t
f o f = f

&&
t y t = t
t y f = f
f y t = f
f y f = f

Estructura del if
al momento de crear mi if primero tengo que tener mi pregunta y esta debe estar dentro de una parentesis para que lo tome en cuenta
un if ternario siempre se representa con un ? al lado derecho de la pregunta
y posteriormente sigue la respuesta en positivo
al lado de la respuesta positiva van los : para avisar que hay otra respuesta
y finalizo poniendo la respuesta negativa


