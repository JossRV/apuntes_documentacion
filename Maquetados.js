
    // las etiquetas scrip se colocan en el doc html
    // despues de la etiqueta html final para 
    // su funcionamiento
    // Impresion de dato
    console.log("hola mundo");
    // Crear variable
    var nombre="Joss";
    // imprimiendo nombre
    console.log("El nombre es: "+nombre);
    // let tambien se usa como variable, palabra reservada let
    let apellido_paterno ='Velazquez';
    // impresion con concatenacion
    console.log("paterno es: "+apellido_paterno);
    
    let apellido_materno ='Nava';

    console.log('materno es: '+apellido_materno);
    edad = 34;

    console.error(`La edad es ${edad}`);

    /**
     * TIP DE BIBLIA
     * 
     * USAR PUNTOS Y COMAS PARA CADA TERMINO DE LINEA
     * APATRTE PARA NO DESACOSTUMBRARSE Y NO OLVIDAR ENTRE OTROS CODIGOS
     * 
     */

    /**
     *tipos de datos
     */

    //Cadenas de texto
    //String
    let cadena ='hola'
    cadena = 'w'

    //numerico
    let numero = 34
    numero = 90.67

    //logico
    let boleano = true
    boleano = false

    //null > nulo
    let nulo = null
    numero = null

    //undefined > indefinido
    let promedio

    //nosotros por convención se usara let para las variables

    let resultado;

    resultado = 25 + 45;
    resultado = '23' + 25;
    //conversion implicita
    //false == 0, true ==1 
    resultado = true + 45; // como resultado imprimira 46
    resultado = false + 45; // como resultado quedara en 45

    resultado = "23" + 25; // son concatenaciones debido que tenemos un "texto" 
    resultado = `23` + 25; // aplica la misma concatenacion por netenr un `texto`


    //resultados de operaciones aritmeticas
    /**
     * +
     * -
     * *
     * /
     * %
     * +=
     * -=
     * /=
     * *=
     * ===
     */

    //console.log(resultado);


    //Ejercicio Operadores
    //tabla 1
    let numero1 = 100,
        numero2 = 20;

    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero1 / numero2;
    let modulo = numero1 % numero2;
    // console.log('valores utilizados: '+numero1+", "+numero2);
    // console.log('suma: '+suma);
    // console.log('resta: '+resta);
    // console.log('multiplicacion: '+multiplicacion);
    // console.log('división: '+division);
    // console.log('modulo: '+modulo);

    // tabla 2

    let variable_x = 4;
    variable_x += 5;
    let variable_y = 6;
    variable_y -= 5;
    let variable_w = 10;
    variable_w *= 10;
    let variable_a = 100;
    variable_a /= 10;

    // console.log('-----------------------------------------');
    // console.log('operador de asignacion suma: '+variable_x);
    // console.log('operador de asignacion resta: '+variable_y);
    // console.log('operador de asignacion multiplicación: '+variable_w);
    // console.log('operador de asignacion división: '+variable_a);
    //tabla 3

    let igualestricto = 6 === 12;
    let noestricto = 12 !== 10;
    let menor_que = 100 < 1000;
    let mayor_que = 1 > 0;
    let menor_igual_que = 100 <= 100;
    let mayor_igual_que = 600 >= 100;
    // console.log('-----------------------------------------');
    // console.log('operador de comparacion ===: '+ igualestricto);
    // console.log('operador de comparacion !==: '+ noestricto);
    // console.log('operador de comparacion <: '+ menor_que);
    // console.log('operador de comparacion >: '+ mayor_que);
    // console.log('operador de comparacion <=: '+ menor_igual_que );
    // console.log('operador de comparacion >=: '+ mayor_igual_que );
    //el de != es diferente a !==




    //estructuras de control
    if (2 > 3) {
        console.log('dentro del if');
    }
    //camino positivo, solo si el if es 1 o true deja entrar a lo que vive dentro
    //else es el camino negativo si el if es 0 o false pasa a la siguiente instrucción
    //js lenguaje interpretado a diferencia de java, js toma mas fuerza
    if (2 > 3) {
        console.log('dentro del if');
    } else {
        //console.log('dentro del else');
    }

    //ejemplo de if con variables
    let opcion = 10;
    if (opcion == 2) {
        console.log('Es igual a 2');
    } else if (opcion == '9') {
        console.log("Es igual a '8'");
    } else if (opcion === 8) {
        console.log("Es igual a 8");
    } else {
        console.log('ninguna de las anteriores');
    }

    //if terneario
    //condicion o pregunta     R+    :     R-     
    console.log((5 > 3) ? "es mayor" : "es menor");

    //      true
    //  false || true
    //pregunta dentro de los parentesis del if
    if (4 > 5 || 8 < 9) {
        //respuesta positiva
        console.log('Dentro del if... or');
    } else {
        //respuesta negativa
        console.log('dentro del else');
    }

    /**
     * Tupla: son elementos de comparación
     * 
     * ||
     * t y t = true
     * t y f = true
     * f y t = true
     * f y f = false
     * 
     * &&
     * 
     * t y t = true
     * t y f = false
     * f y t = false
     * f y f = false
     */
    //           pregunta         "respuesta positiva"  : "respuesta negativa"
    console.log((4 > 5 || 8 < 9) ? "dentro del if terneario" : "dentro del else");



    //ejercicio: determinar si eres o no mayor de edad
    let edad = 10;

    if (edad >= 18) {
        console.log('Eres mayor de edad');
        if (edad == 18) {
            console.log('Acabas de volverte mayor de edad');
        } else {
            console.log('ya pasas los 18');
        }
    } else {
        //console.log('eres menor de edad');
    }

    console.log((edad >= 18) ? (edad == 18) ? 'acabas de volverte mayor de edad' : 'ya pasas los 18' : 'eres menor de edad');

    //Estructuras de control -> toma de datos por contexto
    //funciones en java se llama metodo 
    //Se hace un hibrido entre metodo y funcion
    //funcion en JavasCript == metodo en Java

    /**
     * Funciones
     * TIPOS
     * 1: Funciones declarativas
     * 2: Funciones de expresión
     * 3: 
     * 
     * Es simplemente un bloque de codigo destinado a una tarea especifica
     * Esta tarea y su codigo se pueden reutilizar
     * 
     * 
     */

    //Todas estas son DECLARATIVAS
    //primer tipo no regresa nada y no recibe nada
    //                  Parametros de invocación
    
    function mi_funcion_uno() {
        console.log('Dentro de mi función');
        //todo lo que este entre las llaves de denomina bloque de trabajo
        let resultado = 6 + 5;

        //Se cumple que no regrese nada por que no esta la funcion 'return' 
        //
    }

    //invocación es el uso de la funcion
    let numero = "tres";
    numero = 3;
    numero = true;
    numero=undefined;
    console.log(typeof(numero));


    //segundo tipo de funcion
    //si regresa información pero no recibe nada

    function mi_funcion_dos() {
        return 'regresando esta cadena prrona';
    }

    //invocacion de expresiva debe tener a donde llegar
    let mensaje = mi_funcion_dos();
    console.log(mensaje);

    console.log(mi_funcion_dos());

    //Tercer tipo
    //No regresa información pero si recibe

    function funcion_tipo_tres(nombre) {
        console.log('Mi nombre es: ' + nombre);
    }
    funcion_tipo_tres("Daniel");

    //No es lo mismo retorno que imprimir

    //cuarto tipo
    //Si regresa información y si regresa la misma

    function funcion_tipo_cuatro(num1, num2) {
        return num1 + num2;
    }
    //invocación
    console.log('La suma es: ' + funcion_tipo_cuatro(10, 10));

    //resultado por varible:
    let resultado = funcion_tipo_cuatro(20, 10);
    console.log('El resultado por pasos fue: ' + resultado);

    //Ejercicio: Programa que permita recibir tu nombre, edad

    //dentro de esta imprima los datos y que devuelva una leyenda diciendo 
    //datos capturados

    function ejercicio(nombre, edad) {
        console.log(`Tu nombre es: ${nombre}`);
        console.log(`Tu edad es: ${edad}`);
        return 'Datos Capturados Correctamente';
    }

    console.log(ejercicio("Daniel", 20));

    //cadenas 3 tipos de construir cadenas
    //cadena simple: se contruye con comillas simples ''
    let nombre_pila = "Dany";
    let num1 = 9,
        num2 = 3;
    console.log('Hola soy ' + nombre_pila);
    //cadena doble con comilla doble
    console.log("Hola soy " + nombre_pila);
    //cadena de literales: trabajando operaciones, invocaciones 
    console.log(`Hola soy ${nombre_pila}`);


    //diseñar un programa que tenga 4 funciones +-/*
    //a cada una se le pondran 2 numeros
    //cada una devuelve los resultados y imprimir en la chida
    //sumar todos los retornos
    //Resultado total es: sumar retornos
    

    function suma(numero1, numero2) {
        return numero1+numero2;   
    }
    function resta(numero1, numero2) {
        return numero1-numero2;   
    }
    function multiplicacion(numero1, numero2) {
        return numero1*numero2;   
    }
    function division(numero1, numero2) {
        return numero1/numero2;   
    }

    function resultado() {
        console.log(`La suma es: ${suma(10,10)} \nLa resta es: ${resta(100,90)} \nLa Multiplicación es: ${multiplicacion(10,10)} \nLa división es: ${division(100,10)} \nEl total de los returns es: ${suma(10,10)+resta(100,90)+multiplicacion(10,10)+division(100,10)}`);
    }