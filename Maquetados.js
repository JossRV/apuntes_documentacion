
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
    resultado = `23` + 25; // 


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
    //js lenguaje interpretado
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
    //          condicion -> pregunta -> respuestaPositiva : -> respuestaNegativa     
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

    console.log((edad >= 18) ? ('Eres mayor de edad')(edad == 18) ? ('acabas de volverte mayor de edad') : ('ya pasas los 18') : ('eres menor de edad'));