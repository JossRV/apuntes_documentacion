<?php
    //impresion omuestra de mpresion en pantalla
    echo "hola mundo\n";
    //\n espacio
    //salto de linea <br> y linea es <hr>
    echo "<br>";#salto de linea

    // PHP ES UN LENGUAJE DE PROGRAMACION DEBILMENTE TYPADO 
    // OSEA QUE NO NECESITA DECLARAR TIPO DE DATO A LA VARIABLE
    // PHP ES UN LENGUAJE INTERPRETADO O DE INTERPRETACION, NO COMPILADO

    // variables (no necesitan tipo de dato)
    // estas variables necesitan el simbolo de $ 
    // para ser reconocido como variable
    $variable1 = "Joss\n";
    echo $variable1;

    //dos variables
    $variable2 = 18;
    $variable3 = 1;

    //parentecis, hacer operacion
    //sin parentecis, hacer una cadena
    echo ($variable2 + $variable3)

    // sentencia if, sirve para validacion de sentencias
    // signos > mayor, < menor, <= menor igual, >= mayor igual o = igual

    $numero1=19;
    $numero2=15;
    //      Pregunta
    if ($numero1>$numero2) { #si es correcto tomara la RP
        echo "Es mayor"; #resppuesta positiva
    }else { #si es lo contrario tomara la RN
        echo "Es menor"; #respuesta negativa
    }
    // si no se cumple la condicion esta pasara a realizar la siguiente opcion else

    // if elseif es una estructura de control que te permite validar multiples casos
    // Pregunta
    if ($varb=="a") {
        echo "esto es una a";
    // niega pero vuelve a preguntar
    }else if($varb=="b"){
        echo "esto es una b";
    // niega completamente
    }else{
        echo "esto no es una letra";
    }

    // para negar el dato al usar el ! estas haciendo una negaciono puedes convertirlo en una negacion
    // sirve para hacer una validacion de algo qu eno ocurra
    if(!$dato2){
        echo "dato no verdadero";
    }

    // Diferente, sirve para validar que un dato no corresponda a la canitidad o caracter
    if($dato1!=10){
        echo "dato bueno";
    }

    // Operadores logicos
    // sirven para validar expresiones 
    // el or dirve para validar una sentencia u otra ||
    // el and sirve para validar ambas sentencias &&

    $edad = 50;
    // pregunta ambas cosa y el caso es correcto
    if($edad < 51 && $edad > 49){
        echo "dentro del if";
    }
    echo "<br>";
    $sexo = "M";
    // esta validando cual de las 2 es correcta
    if($sexo=="M" or $sexo=="F"){
        echo "sexo valido";
    }

    // Estructura Switch case
    // comportamiento, es parecido al if anidado pero es mas cuadrado, cada caso tiene un valor y esta respondera con el swuitch

    $variable = 1;

    switch ($variable) {
        // cada caso puede tener valores ya sea numerico, texto, caracter o logico
        case 1:
            echo "este es el caso 1";
            break;
        case 2:
            echo "este es el caso 2";
            break;

        default:
            echo "no existe este caso";
            break;
    }

    // EStructura for
    // Es una estructura de control iterativa
    // donde necesitas tener un inicio, final y un contador

    for ($i=0; $i < 5; $i++) { 
        echo "weeeeeeeeeeee XD";
    }

    // Estructura de control while
    // Es una estructura de control iterativa o repetitiva
    // siempre y cuando una condicion sea valida

    $condicion = 0;
    while ($condicion < 4) {
        echo "se cumple la condicion";
        echo "<br>"
        $condicion++;
        // es lo mismo que $condicion + $condicion + 1;
    }

    // Arreglos  Es un tipo de dato que puede contener n datos
    // apartir de un almacenamiento por indice
    // declaracion
    // en arreglos siempre empezaremos en 0 la cual es su primer lugar de alamcenamiento
    $arreglo = array();
    $arreglo[0]="joss";
    $arreglo[1]=20;
    $arreglo[2]="aline";
    // Mostrar todo el dato del arreglo incluido o ver la informacion mas no sirve para manipularlo
    var_dump($arreglo);

    // de esta forma llamamos la posicion del arreglo y asi podemos manipular la info
    echo $arreglo[1] + 5;

    // podemos usar un for para poder llenar arreglos o llamarlos

    for($i=0; $i < count($arreglo); $i++){
        echo $arreglo[$i];
        echo "<br>";
    }

    // Arreglos asociativos
    // tipo de dato que puede almacenar n datos
    // pero en vez de guardarse por indice, se le proporciona
    // una llave o nombre a dicho dato

    // se forma el array
    $arregloColores=array(
    //   llave      valor
        "coche" => "verde",
        "moto" => "roja",
        "avio" => "blanco"
    );
    echo $arregloColores['coche']

    // foreach
    // Estructura de control iterativa
    // que usa llaves o asociaciones como datos
    // objeto valido es una coleccion de elementos
    //       Objeto valido 
    foreach ($arregloColores     as     $key) {
        echo $key;
        echo "<br>";
    }

    // EXPLODE
    // Explode funcion que convierte un string a un arreglo 
    // dependiendo de la construccion pedida

    $var="Jose Velazquez Nava";
    $fecha="17-10-2021";

 // Variable arreglo           evitar   variable a convertir
    $datos           =explode ( " ",           $var);
    $f=explode("-",$fecha);

    // configurar fecha default de mi ciudad
    date_default_timezone_set('America/Mexico_City');

    // configurar formato de fecha
    $fecha=date('d-m-y');
    // si quiero completo todo en mayusculas D-M-Y (mostrara en ingles xd)

    // FUNCIONES DE PHP
    // Normal
    function mifuncion(){
        // retorno de valor pero no recibo nada
        return 'estoe s un nombre';
    }
    // impresion
    echo mifuncion();

    // funcion con array
    function mifuncion2(){
        $arreglo=array('1');
        return $arreglo;
    }
    // siempre se debe poner return y el print_r
    print_r(mifuncion2());

    // funciones escalares son las que reciben valores
    //                 parametros de invocacion P.I
    function mifuncion3($valor1,$valor2,$opcion){
        # code...
    }

    // PHP POO
    // Clases son nuestro molde de trabajo para nuestros metodos y atributos


        // camelcase *la segunda palabra inicia con mayus*
    class miClase{
        // definir atributos

        // definir metodos
    }


        // pascalcase *ambas palabras inician con mayus*
    class MiClase2{

    }
    // podemos declarar cualquier numero de clases en un archivo php

    class miClase{
        // declaracion de atributos
        public $atributo1="hola mundo";

        // declarando metodo
        public function miMetodo(){
            // llamar una variable usando la pseudo variable this
            // siempre llevara return
            return this->atributo;
        }
    }
?>