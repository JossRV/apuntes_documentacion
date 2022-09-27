-La carpeta "app" tiene toda la información que se agrege, controladores, y modelos

-La carpeta "public" todos los recursos que se pueden compartir con mas personas

-La carpeta "resorce" Se tiene las vistas y los recursos de programación o de desarrollo
Route
-La carpeta "routes" todas las rutas para que funcione, debe pasar por una vista para que funcione, es un puente

-> La carpeta App es básicamente donde se tiene todo el código fuente de la aplicación

-> modelos, trabajan con una tabla de los mismos nombres, y la convierte en un objeto

-> modelos en laravel, son tablas

Carpeta public y resources

resorces => dev
public => archivos listos para el navegador

Dentro de la carpeta resources, se tiene una carpeta views donde se almacenan todas las vistas del a aplicación web

Carpeta Routes: Esta carpeta contiene todas las rutas del proyecto, se pueden crear nuevos archivos de rutas si es que el proyecto es muy grandeo simplemente para mejor ordenamiento
Verbos 
-> Get
->Post
->Put
->Delete

Route::get ('/',[contolador::class, 'metodo']);

controlador: es una clase
metodo: es un metodo que exista dentro de la clase


Vistas y rutas
Las rutas son creadas con un tipo de verbo que pueden ser:
- get->vistas (api)
- del->eliminar recursos de la base de datos
- put-> actualizar (update)
- post-> crear

# Performance en una aplicación: que tan bueno es, cuanta memoria, que tan rapido da respuesta el proyecto

Creación de la primer vista:
- Crear un controlador 
    -- php artisan make:controller Paisajes
- Creamos un método de controlador para llamar la vista
    -- public function index(){
        return view("inicio");
    }
- Creamos una ruta para nuestro método de controlador
    Route::get('/',[Paisajes::class,'index']);
- Creamos una vista
    dentro de la carpeta resorces/views/{nombre vista}.blade.php

# NOTA
-> Reglas de escritura de archivos
tablas -> plural
modelos -> singular
controladores -> plural
Rules o reglas -> singular
Request -> singular

Parametros por URL
simplemente despues de la ruta agregamos entre llaves el parametro que vamos a enviar

Route::get('/edit/{parametros}/{n parametros}',[CategoriasControlles::class,'edit']);
´
Interpolación: ´

Tener mas de una vista en el controlador:  return view('v').view('vz');

Asset: Son todo lo que tiene que ver con css y JS

# Con yiel se crea y con section se consume


Si no te deja instala Laravel en linux y sale el error de que falta el dom, usar el siguiente comando
=> sudo apt-get install php-xml


Instalar Bootstrap:
commands ->{
    - npm i
    - npm i bootstrap 
    - npm i @popperjs/core
    - npm i sass-loader sass webpack --save-dev
}

Configurar archivos css y js

dentro del archivo webpack.mix.js
{
    mix.js('resources/js/app.js','public/js')
    .sass('resources/css/app.scss','public/css')
    .sourceMaps();
}
cambiar el nombre al archivo .css dentro de resources/css/ -> por .scss

Para saber que las rutas estan bien se corre: 
-> npm run watch

Configuracion de recursos CSS y JS 
Dentro del archivo resources/js/app.js agregamos
    require('./bootstrap');
    import 'bootstrap';

Dentro del archivo resources/css/app.scss agregamos
    @import '~bootstrap/scss/bootstrap';

Agregar Dependencias en Layouts tanto css como js 
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <script src="{{mix('js/app.js')}}"></script>

El mix evita la caché del navegador a diferencia de asset

Instalar fontawesome 6.2
    npm install --save @fortawesome/fontawesome-free

En resources/css/app.scss hacemos la importacion
    @import '~@fortawesome/fontawesome-free/css/all.min.css';

instalar Select2
    npm i jquery
    npm i select2
    sudo apt-get install php-xml

En resources/js/app.js agregamos
    import $ from 'jquery';
    require('select2');
    $('.select').select2();

Posteriormente en resources/css/app.scss
    @import "~select2/dist/css/select2.css";

Para finalizar y ver que funciona creamos un select en la pagina inicio

Pagina para instalar el sweetalert
-> https://realrashid.github.io/sweet-alert/install

Bajar el de composer
-> composer require realrashid/sweet-alert

agregar el registro del servidor en config/app.php

-> RealRashid\SweetAlert\SweetAlertServiceProvider::class,
en la seccion de providers, despues del bloque de comentarios Package Service Providers...

agregar en config/app.php en la seccion aliases
-> 'Alert' => RealRashid\SweetAlert\Facades\Alert::class,

ahora en nuestro layout, nuestra plantilla principal, ya sea main o inicio agregaremos el include
-> @include('sweetalert::alert')

despues corremos el comando en la terminal para que la paqueteria se integre
-> php artisan sweetalert:publish

ya en uso podemos seleccionar las alertas que queramos usar o incluso crearlos
-> https://realrashid.github.io/sweet-alert/usage?id=usage


## Archivo .env 
Archivo de configuracion por excelencia en muchos framework para la configuracion de variables de entorno de la aplicacion web
datos de conexion de base de datos, asi como los datos del entorno de trabajo, ya sea produccion o desarrollo
en el archivo de configuracion de config/databases.php podemos encontrar la conexcion por defecto a base de datos

en .env apartir de la linea 11 :

DB_CONNECTION=mysql -> sin modificacion
DB_HOST=127.0.0.1 -> sin modificacion
DB_PORT=3306 -> sin modificacion
DB_DATABASE= 'nombre de la base'
DB_USERNAME= 'usuario'
DB_PASSWORD= 'contraseña'

## Migraciones
Son clases PHP de laravel la forma de crearlo es: 

php artisan migrate

## Que es ORM

Mapeo objeto-Relacional(orm)

esto quiere decir que la aplicacion tomara a la base de datos como si fuera un objeto de la misma aplicacion


Por ejemplo si tenemos una tabla llamada personas el objeto en el orm sera llamado personas, si lat abla tiene un camoi llamado
apellido_paterno entonces sera una propiedad en el orm

$personas = new Personas();
$personas -> apellido_paterno = "Aquino";


## Modelos

los modelos son basicamente clases phph que nos permiten interactuar con la base de datos,
por convencion en laravel 8 los modelos se escriben con el nombre de una tabla existente para asi poder crear una relacion directa a la hora de usar el orm
eloquent, sin embargo si no deseamos utilizar la convencion, laravel cuenta con la configuracion necesaria para que el modelo pueda trabajar con la tabla que
nosotros le indiquemos..


# Para crear un modelo en laravel 8 basta con escribir el siguiente comando:

php artisan make: model nombre_modelo


## usar tablas propias con laravel 8
php artisan make::controller categorias
php artisan make:model categoria


public function index(){

->bd = create table t_categoria(id_categoria int auto_increment,nombre varchar(255), created_at timestamp, updated_at timestamp, primary key[id_categoria];

$categorias = categoria:: all();
return view('welcome,compact('categorias'));



## Usar tablas propias con laravel 8

llenamos el modelo

class Categoria extends Model{

use HasFactory;

protected $table = 't_categoria';
protected $primaryKey = 'id_categoria';
protected $fillable = [
	'nombre'
];
protected shidden =
 'create_at',
 'updated_at'
];
}



MOSTRAR INFORMACION DE UNA TABLA EN UNA VISTA

@foreach($categorias as $item)
<td>{{$item->id}}</td>
@endforeach
