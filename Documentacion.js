/**
 *tipos de datos
*/

//Cadenas de texto
//String
let cadena = 'hola';
cadena = 'w';

//numerico
let numero = 34;
numero = 90.67;

//logico
let boleano = true;
boleano = false;

//null > nulo
let nulo = null;
numero = null;

//undefined > indefinido (es porque no le estamos agregando valor)
let promedio;

// typeof es una palabra reservada que transforma de que tipo de variable es
let numero = null;
console.log(typeof(numero));

// documento especifico del lenguaje JS

/**
 * - no necesito usar la etiqueta <script></script>
 * - este contenido se exportará y se usara en otro lado
 */

// alert es una ventana que aparece en el navegador
alert("Codificando desde un doc de js")

// codigo de impresion
console.log("impresion");

//  let es una palabra reservada
// hay 2 formas de crear variables, usando let, var, o incluso sin palabra reservada
let mascota = "perrito";
vehiculo = "spark 2014";

// operadores aritmetricos
let suma;
let resta;
let multiplicacion;
let division;
let modulo_resultado;
let incremento = 0;
let decremento = 1;

// Operador suma
suma = 6+9;
// operador resta
resta = 20-15;
// operador multiplicacion
multiplicacion = 4*5;
// operador division
division = 10/2;
// operador modulo
// este operador mostrara el restante de la divicion que ha hecho
modulo_resultado = 10%2; // si divido 10 / 2 es igual a 5 y el restante queda 0
// operador de incremento
incremento++; //tenemos 0 en la
// operador de decremento
decremento--;
// ASIGNACIONES
let asignacion;
let asignacionSuma=0;
let asignacionResta=5;
let asignacionMultiplicacion=2;
let asignacionDivision=10;
// el = es una asignacion que puedes asignar numeros o letras o palabras o caracteres
asignacion = 10;
// sumara directamente el numero derecho para tener un nuevo resultado
// algo asi como remplazo por ejemplo asignacionSuma = 0 + 5 al final me mostrara 5
asignacionSuma+=5;
// restara directamente el numero derecho para tener un nuevo resultado
// ejemplo asignacionResta = 5 - 5 al final me mostrara 0
asignacionResta-=5;
// multiplicara directamente el numero derecho para tener un nuevo resultado
// ejemplo asignacionMultiplicacion = 2 * 5 al final me mostrara 10
asignacionMultiplicacion*=5;
// el numero derecho dividira directamente al izquierdo
// ejemplo asignacionDivision = 10 / 2 al final me mostrara 5
asignacionDivision/=2;

let numero1 = 1;
let numero2 = 2;
// Operadores de comparacion son los que usaremos para obtener true o false
// igual estricto Comprobara si los valores de lado derecho son identicos entre si
//              1        2
resultado1 = numero1===numero2;//devolvera false deben ser iguales los numeros para que se cumplan
resultado2 = numero1!==numero2;//devolvera true son diferentes los numeros, si cumple
resultado3 = numero1<numero2;//devolvera true porque el numero menor es 1
resultado4 = numero1>numero2;//devolvera false porque el 1 no es mayor
resultado5 = numero1>=numero2;//devolvera false porque el 1 no es mayor ni igual al 2
resultado6 = numero1<=numero2;//devolvera true porque el 1 es menor
resultado7 = numero1==numero2;// devolvera false este debe ser igual en ambos lados sin importar si esta comentado o con ""
resultado8 = numero1!=numero2;//si tiene otra cosa que no lo hace ser identico ya sea texto u otro numero sera true

// ------------------------------------------
// Como se crea un if
// pregunta si 2 es mayor a 1
if(            2      >     1){//respuesta true
    // aqui va la respuesta verdadera
    console.log("Dentro de IF");
}

// como se crea un if else
// pregunta si 2 es menor a 1
if(            2      <     1){//respuesta falso
    // aqui va la respuesta verdadera
    console.log("Dentro de IF");
}else {//cuando el caso es falso entarra a este bloque para responder la respuesta negativa
    // aqui va la respuesta negativa (falso)
    console.log("dentro del ELSE");
}

let opcion = 8;

// se puede hacer if else if para poner varias preguntas y varias respuestas
//ejemplo
if(opcion==2){
    console.log('opcion es igual a 2');
}else if(opcion == '8'){
    console.log("opcion es igual a '8'");
}else if(opcion == 8){
    console.log('opcion es igual a 8');
}else{
    console.log('ninguno de las anteriores.')
}

// un if de 2 preguntas or || o tambien and & tomando en cuenta las tuplas
if(4>5 || 8<9){
    console.log('dentro del if...');
}

/**
 * Tupla
 * son dos elementos a comparar
 */

/**
 * ||
 *
 * t o t = t
 * t o f = t
 * f o t = t
 * f o f = f
 *
 * &&
 *
 * t y t = t
 * t y f = f
 * f y t = f
 * f y f = f
 */

// el if anidado se crea haciendo mas preguntas deltro de un if
if(4>5 || 8<9){
    console.log('dentro del if...');
    if(5<8){
        console.log("ando mas dentro del if...");
    }
}

// este es un if ternario
//              Pregunta        R positiva             R negativa
console.log((4 > 5 || 8 < 9)? "Dentro de if ..." : "Dentro del else...");

// FUNCIONES
// hay 2 tipos de funciones
// Funciones declarativas
// Funciones de expresion

// FUNCIONES DECLARATIVAS

// Primer tipo de funcion: no regresa nada y que no recibe nada
// firma (creando funcion)
    // V.R          P.I
function mi_funcion(   ){
    // todo lo que quede dentro de las llaves de la funcion se denomina bloque de trabajo
    console.log("Dentro de mi funcion");
    // el V.R significa variables de retorno
    // el P.I significa parametros de invocacion
}
// invocacion o llamar la funcion
mi_funcion();

// Segundo tipo: Regresa informacion peor no recibe nada
function funcion_tipo_dos(){
    // el return me indica que quiero regresar algo
    return "Regresando esta cadena de texto";
}

// invocacion por variable
let mensaje = funcion_tipo_dos();
console.log(mensaje);
// invocacion por el nombre de la funcion
console.log(funcion_tipo_dos());

// Tercer tipo: No regresa informacion pero si recibe
function funcion_tipo_tres(nombre){
    // en el parametro de invocacion marca que recibire algo
    console.log("tu nombre es: "+nombre);
}

funcion_tipo_tres("Joss");

// Cuarto tipo: Si regresa informacion y si recibe informacion
function funcion_tipo_cuatro(numero1, numero2){
    // en el PI estoy reciviendo algo y a la vez retornare un resultado
    return numero1+numero2;
}

console.log(funcion_tipo_cuatro(10,3));
let resultado_suma = funcion_tipo_cuatro(15,6);
console.log("El resultado de la suma es: "+resultado_suma);

// Para conocer mas de FUNCIONES DE EXPRESIONES debemos tomar en cuenta el concepto de hosting
/**
 * Hosting - Hasta version 5 ECMAScript
 *
 * Utilizar algo antes de declararlo
 *
 * -var -> palabra reservada para crear o definir variables
 * -fuction -> palabra reservada para definir funciones
 *
 * Funciones de expresiones
 *
 * - se invocan igual que la funcion clasica
 * - le puedes pasar o no paremtros de invocacion
 * - varios autores los denominan como funciones anonimas
 * - aplican los 4 tipos de funcion que vimos en el tema pasado
 *
*/


let mi_funcion = function(){

    return `Dentro de mi funcion de expresion`;

}

// Invocacion (invocacion igual de la expresion)
console.log(mi_funcion());

// primer tipo no regreso ni recibo nada
let tipo_uno = function(){
     alert (`Trabajando dentro de la funcion`);
}
tipo_uno();

// Segundo tipo no regreso pero si recibo
// Escribir las variables dentro del parentesis
let tipo_dos = function(nombre,edad){
    console.log(`Hola ${nombre} tienes ${edad} años`);
}

// Pasarle los datos respetando el orden de construccion de las variables en los parentesis
tipo_dos(`Joss`,20);

// tipo tres si regresa y si recibe
let tipo_tres = function(equipo){
    return `Tu equipo favorito es ${equipo}`;
}
console.log(tipo_tres(`America`));

// tipo 4 regresa algo pero no recibe nada
let tipo_cuatro = function(){
    return true;
}
// Hay 2 formas de invocar, puedes invocarlo omitiendo los parentesis mas sin encambio si recibe algo debe tener parentesis
// pero de manera natural siempre debe tener parentesis
if(tipo_cuatro){
    console.log(`Dato valido`);
}

// Apartir de aqui se trabaja con ECMAScript 6 en adelante
// Podemos hacer uan funcion corta de esta manera
let tipo_corta = () => {
    return true;
}
if(tipo_corta()){
    console.log(`Dato valido`);
}

// firma            P.I         impresion ya sea cadena, u otra cosa
let tipo_corto = (mascota) => `Mi perrito se llama ${mascota.toUpperCase()}`;
// Los mismo tipos pero en forma nueva ECMAScript 6
// ya no usan la palabra reservada function

let tipo_uno = () => alert (`Trabajando dentro de la funcion`);
tipo_uno();

let tipo_dos =(nombre,edad) =>console.log(`Hola ${nombre} tienes ${edad} años`);
tipo_dos(`Joss`,20);

let tipo_tres = (equipo) => `Tu equipo favorito es ${equipo}`;
console.log(tipo_tres(`America`));

let tipo_cuatro = () => true;
if(tipo_cuatro){
    console.log(`Dato valido`);
}

// SCOPE

// Ejemplo A
let numero = 9;//variable global

let impresion_numero = (numero) => `El numero es: ${numero}`;
let impresion_numero2 = () => `El numero es: ${numero}`;
console.log(numero);
// La variable global te permite usarlo en calquier lugar simpre que sea global

// Ejemplo B
console.log(decimal);
let construcctor_de_numeros = () => {
    let decimal = 0.78;//variable no global
}
// en el ejmplo B no podemos tomar la variable debido que solo pertenece a esa funcion
// o en pocas palabras la variable no es global

// Aqui comenzamos a utilizar el doc html y como se llama

// Estructura de seleccion
$(document).ready(function(){

    console.log(`La pagina acabo de cargar correctamente`);

    // leemos texto desde un div de HTML
    let texto_leido = $('#objetivo').text();
    console.log(texto_leido);

    // scribimos texto dentro de un div HTML
    $('#objetivo2').text("Hola mundo desde JS y hasta HTML");
});


$(document).ready(function () {
    // MVC modelo vista controlador
    // leer texto desde un div de html (elemento que no permite escribir algo dentro del él)
    let variale = $('#objetivo1').text();
    console.log(variale);

    $('#objetivo2').text("Hola desde JS");

    //-----------------------------------
    // leer valor escrito

    let valor_leido;
    // ejemplo de como programar un boton con .click y una función anonima
    $('#btn_leer').click(function () {
        valor_leido = $('#caja_input').val();
        alert('El valor fue: ' + valor_leido);
    });
    // Ejemplo de escritura en un input de tipo texto
    $('#btn_escribir').click(function(){
        $('#caja_input').val('Escribe tu nombre aquí');
    });
});

// Si se va a trabajar con un div que no permite la escritura se utiliza .text
//Si se a a trabajar con un input que permite la escritura se utiliza .val
// convencion de clase btn

$('#name').replaceWith('<input type="text" name="state_d" id="state_d">');

//despues de la funcion $('#name') a cualquier accion que se vaya a realizar
