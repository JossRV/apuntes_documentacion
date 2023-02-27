como saber si tenemos composer

composer en cmd

4 instalacion de laravel
por defecto se instalara la version mas reciente

# comando de creacion de proyecto
composer create-progect laravel/laravel=8.*"nombre"

# vistas
carpeta views donde se encuentra en resources->views
como se manda a llamar -> por ruta, aunque no es la recomendable por defecto porque no esta enlazada con un controlador

# layaout->plantillas
se ubica en la carpeta resources->views->layouts
se sabe que se llama la plantilla con la extension .blade
estructura del layout
<html>
<head>
    <!-- Dependencias B5, CSS, FW -->
    <title>Mi aplicación web</title>
</head>
<body>
    <header>...</header>
    <nav>
        <!-- Se incluye la vista donde contiene el navbar -->
        @include('pathShared')
    </nav>
    <main>
        <!-- seccion donde ira el contenido de mis vistas, se abre con yiel -->
        @yield('contenido')
    </main>
    <footer>...</footer>
    <!-- dependecias JS -->
</body>
</html>

<!-- Vista -->
@extends('pathlayout')-> ‘main’
<!-- abro la seccion para que envie mi contenido al yiel creado en la vista main -->
@section('contenido')
    <h1>Mi contenido</h1>
    <p>Este es el contenido de mi vista específica.</p>
@endsection

# rutas
puentes o asociados a una peticion
funcionan con verbos http
PERFOMANCE->la aplicacion se genera de manera optima
el archivo web.php se ubica en la carpeta routes
para crear la ruta con un controlador
<!-- ruta inicio -->
route::get('/'->nombre ruta,[controller::class->clases,'metodo'->metodo de controlador]); 
<!-- ruta con parametros -->
route::get('inicio/{id0}/{id}'->nombre ruta,[controller::class->clases,'metodo'->metodo de controlador]);
<!-- ruta con un nombre especifico (facilidad de llamar a otras vistas con interpolacion {{}}) -->
route::get('inicio/{id0}/{id}'->nombre ruta,[controller::class->clases,'metodo'->metodo de controlador])->name("rutaX");

# controladores
es un enlace y control entre vistas y modelos
<!-- creacion de controladores -->
php artisan make:controller 'nombre'
<!-- agregar los metodos para realizar el crud -->
php artisan make:controller 'nombre' -r 
<!-- retornar vista -->
return view("nameView");
<!-- retornar vista con variables y datos -->
$titulo = "Inicio";
return view("nameView",compact("titulo"));

% <!-- recupera la informacion de la solicitud de los verbos que haya llegado -->

public function store(request $request){
$request->request('v1')->se obtiene el valor
$request->v1;

}

<!-- llamas clases para reservar memoria -->
$item = new User();
% <!-- rellena el espacio de memoria -->
$item = User::all();


# modelos
<!-- clases que representan la tabla de base de datos -->
php artisan make:model 'nombre'
<!-- crea el modelo y la migracion para hacer las tablas al mismo tiempo -->
php artisan make:model 'nombre' -m
<!-- dentro del archivo model podemos especificar el nombre de la tabla -->
protected $table = 'nombreTabla';

# migracion
nos ayudan al control en la bd
<!-- comando para crear migracion -->
php artisan make:migration crear_tabla_usuarios

migracion->clase php que por medio del codigo crea tablas

<!-- comando para dar de alta -->
php artisan migrate
<!-- actualizar tablas con campos nuevos o coreccion de campos -->
php artisan migrate:fresh

se crean dos metodos up()->declara los campos de la tabla y down()->revierte la migracion

<!-- objeto para crear los datos -->
$table
% metodos para el control de registros
% Determina que es un campo autoincrementable y de llave primaria
$table->id();
<!-- Campo de tipo cadena -->
$table->string();
% campo de tipo date
$table->date();
$table->date('Y-m-d');
$table->date('H-m-s');
<!-- create at y update at -->
$table->timestamps();
% campo tipo entero int
$table->integer();
<!-- campo de tipo flotante -->
$table->float();
% 


# factories
Es una fabrica de modelos que llena las tablas con informacion generada aleatoriamente, hecho por php y usa faker
comando para crear un factorie
<!-- php artisan make:factory nombre -->
se almacena en el directorio de bd

# semillas
dentro de la carpeta seeders hay una carpeta root y se manda a llamar el factorie con el metodo factorie con cad seguido de create, con eso se crea la linea factorie
<!-- comando -->
php artisan db:seed
 
# tinker
Herramienta de linea de comandos en laravel
<!-- Dentro de tu proyecto usas el comando abrira como un shell -->
php artisan tinker

<!-- obtener datos con tinker  -->
$item = App\Models\miModelo::all();
% una sola muestra
% muestra por rango
$item = App\Models\miModelo::take(1)->get();
<!-- retorna un registro especifico, ya sea id o dato -->
$item = App\Models\miModelo::find(2)->get(); -->

% Agregar nuevos datos
$item = new App\Models\Estudio
$item->nombre = 'Joss';
$item->paterno = 'Velaz';
$item->FechaNacimiento = '2001-04-16'
$item->save();

<!-- Actualizacion con tinker -->
$item = App\Models\Person::find('xNum');
$item->nombre='name actu';
$item->paterno='paterno actu';
$item->materno='materno actu';
$item->save();

% Truncar toda la tabla
App\Models\Person::truncate();

% Eliminar un registro
$item = App\Models\Person::find(1);
$item->delete();

% Con q sales del tinker

# query builder eloquent


