// documento especifico del lenguaje JS

/**
 * 
 * - no necesito usar la etiqueta <script></script>
 * - este contenido se exportará y se usara en otro lado 
 * 
 */

 alert("Codificando desde un doc de js")

 let mascota = "perrito"
 vehiculo = "spark 2014"

// operadores aritmetricos

let suma;
let resta;
let multiplicacion;
let division;
let modulo_resultado;

suma = 6+9;
resta = 20-15;
multiplicacion = 4*5;
division = 10/2;
modulo_resultado = 10%2;

let incremento = 0;
let decremento = 5;

incremento++;
decremento--;

let asignacion;

asignacion = 10;

let asignacionSuma=0;
let asignacionResta=5;
let asignacionMultiplicacion=2;
let asignacionDivision=10;

asignacionSuma+=5;
asignacionResta-=5;
asignacionMultiplicacion*=5;
asignacionDivision/=2;

let numero1 = 1;
let numero2 = 2;

resultado = numero1===numero2;
resultado2 = numero1!==numero2;
resultado3 = numero1<numero2;
resultado4 = numero1>numero2;
resultado5 = numero1>=numero2;
resultado6 = numero1<=numero2;
// ------------------------------------------

if(2 > 1){
    console.log("Dentro de IF");
}

if(2 > 3){
    console.log("Dentro de IF");
}else {
    console.log("dentro del ELSE");
}

let opcion = 8;

if(opcion==2){
    console.log('opcion es igual a 2');
}else if(opcion == '8'){
    console.log("opcion es igual a '8'");
}else if(opcion == 8){
    console.log('opcion es igual a 8');
}else{
    console.log('ninguno de las anteriores.')
}


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

if(4>5 || 8<9){
    console.log('dentro del if...');
}else{
    console.log('dentro de else...');
}

console.log((4 > 5 || 8 < 9)? "Dentro de if ..." : "Dentro del else...");


// en 2 numeros enteros diferentes visualizar el mayor de ellos

let numero3=20;
let numero4=5;

console.log((numero3>numero4)?"el numero3 mayor que numero4":"el numero4 es mayor que numero3");

let usuario='joss';
let contraseña='joss';

alert((usuario=='joss')?(contraseña=='joss')?"iniciando sesion...":"Contraseña incorrecta":"usuario incorrecto");

//determinar si un numero es multiplo de 10.
// siempre pa sacar multiplos se usa modulo.
console.log((numero3%10==0)?"el numero "+numero3+" es multiplo de 10":"el numero "+numero3+" no es multiplo de 10");

// FUNCIONES
// Funciones declarativas
// Funciones de expresion

// FUNCIONES DECLARATIVAS
// Primer tipo de funcion: no regresa nada y que no recibe nada
// firma (creando funcion)

    // V.R         P.I 
function mi_funcion(  ){
    // todo lo que quede dentro de las llaves de la funcion se denomina bloque de trabajo
    console.log("Dentro de mi funcion");

}
// invocacion o llamar la funcion
mi_funcion();
// let numero = null;
// console.log(typeof(numero));

// Segundo tipo: Regresa informacion peor no recibe nada

function funcion_tipo_dos(){
    return "Regresando esta cadena de texto";
}

// invocacion
let mensaje = funcion_tipo_dos();

console.log(funcion_tipo_dos());

// Tercer tipo: No regresa informacion pero si recibe
function funcion_tipo_tres(nombre){
    console.log("tu nombre es: "+nombre);
}

funcion_tipo_tres("Joss");

// Cuarto tipo: Si regresa informacion y si recibe informacion 
function funcion_tipo_cuatro(numero1, numero2){
    return numero1+numero2;
}

console.log(funcion_tipo_cuatro(10,3));
let resultado_suma = funcion_tipo_cuatro(15,6);
console.log("El resultado de la suma es: "+resultado_suma);

// // // Ejercicio

function ejercicio(nombre, edad) {
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    return 'Datos Capturados';
}

console.log(ejercicio("Jose Alberto",20));

//Diseñen un programa el cual contenga 4 funciones suma resta multiplicacion y division
//Los vas a invocar y vas a poderle pasar 2 numeros, cada una de estas funciones te tiene que devolver el resultado de la funcion
//todos los resultados de los returns tienen que estar y vas a sumar los retornos

function Suma (numero1, numero2){
    return numero1+numero2;
}
function Resta (numero1, numero2){
    return numero1-numero2;
}
function Multiplicacion (numero1,numero2){
    return numero1*numero2;
}
function Division (numero1,numero2){
    return numero1/numero2;
}
function Cadena(){
    return `La suma es ${Suma(10,3)} \nLa resta es ${Resta(20,7)} \nLa multiplicacion es ${Multiplicacion(3,5)}\nLa division es ${Division(15,5)}\nEl resultado total es de ${Suma(10,3)+Resta(20,7)+Multiplicacion(3,5)+Division(15,5)}`
}

console.log(Cadena());

/**
 * Hosting - Hasta version 5 ECMAScript
 * 
 * Utilizar algo antes de declararlo
 * 
 * -var -> palabra reservada para crear o definir variables
 * -fuction -> palabra reservada para definir funciones
 * 
 * 
 */

console.log(nombre);

var nombre = `Nombre`;

// // // --------------------------

console.log(letrero());

function letrero(){
    return `Danny`;
}

/**
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

//  Segunto tipo no regreso pero si recibo
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

let tipo_corto = (mascota) => `Mi perrito se llama ${mascota.toUpperCase()}`;
// Los mismo tipos pero en forma nueva ECMAScript 6

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
let numero = 9;

let impresion_numero = (numero) => `El numero es: ${numero}`;
let impresion_numero2 = () => `El numero es: ${numero}`;
console.log(numero);

console.log(decimal);
let construcctor_de_numeros = () => {
    let decimal = 0.78;
}

// Estructura de seleccion
$(document).ready(function(){
    console.log(`La pagina acabo de cargar correctamente`);

    // leemos texto desde un div de TML
    let texto_leido = $('#objetivo').text();
    console.log(texto_leido);

    // scribimos texto dentro de un div HTML
    $('#objetivo2').text("Hola mundo desde JS y hasta HTML");
});

$(document).ready(function () {
    // modelo mvc 
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