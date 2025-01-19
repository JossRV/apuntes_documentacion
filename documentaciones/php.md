# PHP
- **PHP** utiliza las etiquetas `<?php ?>`
- De este modo podemos trabajar php en archivos de extension .html y .php
- La impresion muestra en pantalla con echo

~~~
    echo "hola mundo\n";
~~~

- Tambien podemos manejar etiquetas html dentro de php

~~~
    echo "<br>"; #salto de linea
    // \n espacio
    // salto de linea <br> 
    // linea es <hr>
~~~

- PHP ES UN LENGUAJE DE PROGRAMACION DEBILMENTE TYPADO 
- NO NECESITA DECLARAR TIPO DE DATO A LA VARIABLE
- PHP ES UN LENGUAJE INTERPRETADO O DE INTERPRETACION, NO COMPILADO

- Las variables (no necesitan tipo de dato)
- Estas variables necesitan el simbolo de $ 
- para ser reconocido como variable

~~~
    $variable1 = "Joss\n";
    echo $variable1;
~~~

- Dos variables

~~~
    $variable2 = 18;
    $variable3 = 1;
~~~

- Parentecis, hacer operacion
- Sin parentecis, hacer una cadena

~~~
    echo ($variable2 + $variable3);
~~~

# Sentencias IF
- Sirve para validacion de sentencias
- Signos: 
  - **>** mayor 
  - **<** menor 
  - **<=** menor igual
  - **>=** mayor igual 
  - **=** igual

~~~
    $numero1 = 5;
    $numero2 = 15;
    //  Pregunta
    if ($numero1 > $numero2) { # si es correcto tomara la RP
        echo "Es mayor"; # resppuesta positiva
    }else { # si es lo contrario tomara la RN
        echo "Es menor"; # respuesta negativa
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
~~~

- Para negar el dato al usar el `!` estas haciendo una negacion o lo estas convirtiendo en una negacion
- Sirve para hacer una validacion de algo que no ocurra

~~~
    if(!$dato2){
        echo "dato no verdadero";
    }
~~~

- Diferente, sirve para validar que un dato no corresponda a la canitidad o caracter

~~~
    if($dato1!=10){
        echo "dato bueno";
    }
~~~

# Operadores logicos
- Sirven para validar expresiones 
- El `or` sirve para validar una sentencia u otra `||`
- El `and` sirve para validar ambas sentencias `&&`

~~~
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
~~~

# Estructura Switch case
- Comportamiento, es parecido al if anidado pero es mas cuadrado, cada caso tiene un valor y esta respondera con el switch

~~~
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
~~~

# Estructura for
- Es una estructura de control iterativa
- Donde necesitas tener un inicio, final y un contador

~~~
    #   inicio  final contador
    for ($i=0; $i < 5; $i++) { 
        echo "weeeeeeeeeeee XD";
    }
~~~

# Estructura de control while
- Es una estructura de control iterativa o repetitiva siempre y cuando una condicion sea valida

~~~
    $condicion = 0;
    while ($condicion < 4) {
        echo "se cumple la condicion";
        echo "<br>";
        $condicion++;
        // es lo mismo que $condicion + $condicion + 1;
    }
~~~

# Arreglos  
- Es un tipo de dato que puede contener n datos apartir de un almacenamiento por indice
- Declaracion...
- En arreglos siempre empezaremos en 0 la cual es su primer lugar de alamcenamiento

~~~
    $arreglo = array();
    $arreglo[0] = "joss";
    $arreglo[1] = 20;
    $arreglo[2] = "aline";
~~~

- Mostrar todo el dato del arreglo incluido o ver la informacion, no sirve para manipular los datos

~~~
    var_dump($arreglo);
~~~

- De esta forma llamamos la posicion del arreglo y asi podemos manipular la info

~~~
    echo $arreglo[1] + 5;
~~~

- Podemos usar un for para poder llenar arreglos o llamarlos

~~~
    for($i=0; $i < count($arreglo); $i++){
        echo $arreglo[$i];
        echo "<br>";
    }
~~~

- Arreglos asociativos: tipo de dato que puede almacenar n datos pero en vez de guardarse por indice, se le proporciona una llave o nombre a dicho dato.
- Se forma el array

~~~
    $arregloColores=array(
    //   llave      valor
        "coche" => "verde",
        "moto" => "roja",
        "avio" => "blanco"
    );
    echo $arregloColores['coche'];
~~~


- foreach : 
- Estructura de control iterativa que usa llaves o asociaciones como datos objeto valido es una coleccion de elementos
~~~
    //Objeto valido 
    foreach ($arregloColores as $key) {
        echo $key;
        echo "<br>";
    }
~~~
- EXPLODE: 
- Funcion que convierte un string a un arreglo dependiendo de la construcción pedida
~~~
    $var="Jose Velazquez Nava";
    $fecha="17-10-2021";
    // Variable arreglo = evitar, variable a convertir
    $datos = explode( " ", $var);
    $f = explode("-",$fecha);
~~~

- Configurar fecha default de mi ciudad
    `date_default_timezone_set('America/Mexico_City');`

- Configurar formato de fecha
~~~
    $fecha=date('d-m-y');
    // si quiero completo todo en mayusculas D-M-Y (mostrara en ingles xd)
~~~

### FUNCIONES DE PHP
~~~
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
~~~
### PHP POO
- Clases: 
- Son nuestro molde de trabajo para nuestros metodos y atributos
~~~
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
            return $this->atributo;
        }
    }

    class clasePadre{
        public function metodoPadre(){
            return "hola desde padre";
        }
        public function metodo1(){
            return "este es metodo padre";
        }
    }
    class claseHijo extends clasePadre{
        public function metodoHijo(){
            // return self::metodo1(); //si uso self llamara al metodo que esta inicialmente, en este caso claseHijo
            return parent::metodo1(); //si uso parent llamara al metodo que esta despues de extends, en este caso clasePadre
        }
        public function metodo1(){
            return "este es metodo hijo";
        }
    }
    // la herencia es obtener todas las propiedades de una clase a otra mediante la palabra reservada extends

    $objeto=new claseHijo();
    echo $objeto->metodoHijo();

    // instancia rapida o de doble puntuacion 
    // echo claseHijo :: metodoHijo(); se la hace de a pedo profe, nomas se pone de mamon, mejor la instancia de objeto xd
    // cuando vaya hacer herencias tengo que usar estatic o volver un metodo estatico para poder ejecutarlo

    class clase{
        private function metodoPrivado(){
            return "saludando";
        }
        public function mandaSaludo(){
            return self::metodoPrivado();
        }
    }
    $objeto=new clase();
    echo $objeto->mandaSaludo();
    // echo self::mandaSaludo();

    class clasePadre{
        protected function metodoPadre(){
            return "metodo protegido";
        }
    }
    class claseHija extends clasePadre{
        public function muestra(){
            return parent::metodoPadre();
        }
    }

    $objeto = new claseHija();
    echo $objeto->muestra();

    class miClase{
        // atributos
        public $atributo="hola mundo";

        // metodos
        public function miMetodo(){
            // llamar atrubuto
            // usamos seudovariable this

            return $this->atributo;
        }
    }

    // llamar clase
    $c=new miClase();
    // llamar metodo o guardar metodo en una variable
    $impresion = $c->miMetodo();
    // o imprimir llamando el metodo directamente
    echo $c->miMetodo();
    echo '<hr>';
    // imprimir el resultado de mi metodo por variable
    echo $impresion;

    class miClase{
        public $resultado=0;
        public function miMetodo($v1,$v2){
            $this -> resultado = $v1 + $v2;
            return $this -> resultado;
        }
    }

    // instanciar o declara un objeto
    $objeto=new miClase();
    echo $objeto->miMetodo(5,5);

    class metodos{
        public function mandarColor($valor){
            if($valor==1){
                return "rojo";
            }else if($valor==2){
                return "verde";
            }else if($valor==3){
                return "negro";
            }
        }
        public function mostrarColor($tipocolor){
            return self::mandarColor($tipocolor);
        }
    }

    $objeto=new metodos();

    echo $objeto->mostrarColor(3);

    class retornoDatos{
        // $string="hola mundo";
        // $entero=10;
        // json
        // $arreglo=array();
        public function string($edad){
            if($edad>=18){
                return "Es mayor de edad";
            }else{
                return "Es menor de edad";
            }
        }

        public function entero($valor){
            if($valor>0){
                return 1;
            }else{
                return 0;
            }
        }

        public function arreglo($ciclos){
            $datos=array();
            for($i=0;$i<$ciclos;$i++){
                $datos[$i]=$i;
            }
            return $datos;
        }

        public function json(){
            $arreglo=array(
                "hdd"=>500,
                "pantalla"=>21,
                "ram"=>8
            );
            return json_encode($arreglo);
        }
    }

    $objeto = new retornoDatos();
    echo $objeto->string(18);
    echo '<hr>';
    echo $objeto->entero(0);
    echo '<hr>';
    var_dump ($objeto->arreglo(3));
    echo '<hr>';
    var_dump ($objeto->json());
~~~
### Session

- Sesiones con PHP: 
- Variables super global (en toda la carpeta web)
- Funciona como un arreglo
- No se pueden utilizar si no se declara, `"session_start()"`
- Para poder vaciar una sesión o destruir se puede utilizar: 
~~~
    unset
    session_destroy
~~~
- Se almacena en el servidor web, A diferencia de las cookies, las cuales guardan la información en el cliente, 
- los valores, se guardan en el servidor, de forma inaccesible al cliente.
~~~
    session_start();
    echo $_SESSION['usuario'];
    // unset($_SESSION['usuario']);
    session_destroy();
    echo '<br>';
    echo $_SESSION['usuario'];
    echo '<br>';
    echo $_SESSION['rolusuario'];

    // en otro documento
    session_start();
    // declarar una variable de session
    echo $_SESSION['usuario']="Joss";
    echo '<br>';
    $_SESSION["rolusuario"]['rol1']= "admin";
    $_SESSION["rolusuario"]["rol2"]= "cliente";
    // $_SESSION["roluser"]["rol1"]="admin";
    // $_SESSION['roluser']['rol2']="cliente";
    // echo '<pre>';
    print_r($_SESSION['rolusuario']);

    // hacer alertas foraneas sin js usando session
    session_start();
    if(isset($_SESSION['x_nombre'])==1){
        // en el otro documento en donde hacemos nuestro proceso de insercion, con la misma validacion en la que inserta los datos
        // declaramos session con el mismo nombre en especifico, y asignamos valor
        // esto nos permitira ir en cualquier doc, obviamente sin olvidar los session_start(); 
        // y asi teniendo algo asignado de nuevo hacemos una validacion y en ella contendra la alerta que lo mostrara
        echo "alerta";
        // el unset es con el proposito de evitar que al recargar la pagina se repita de nuevo la impresion de la alerta
        unset($_SESSION['x_nombre']);
    }
~~~