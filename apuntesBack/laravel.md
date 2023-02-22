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
creacion de controladores -> php artisan make:controller 'nombre'
php artisan make:controller 'nombre' -r (la r agrega los metodos para realizar el crud)

public function store(request $request){
$request->request('v1')->se obtiene el valor
$request->v1;

}->recupera la informacion de la solicitud de los verbos que haya llegado

$item = new User();->llamas clases para reservar memoria
$item = User::all();->rellena el espacio de memoria


# modelos
clases que representan la tabla de base de datos
php artisan make:model 'nombre'
php artisan make:model 'nombre' -m -> crea la migracion para hacer las tablas

# migracion
nos ayudan al control en la bd
comando para migracion
php artisan make:migration crear_tabla_usuarios

migracion->clase php que por medio del codigo crea tablas

comando para dar de alta
php artisan migrate

se crean dos metodos up->declara los campos de la tabla y down->revierte la migracion
objeto para crear los datos->table
campos para el control de registros->

# factories
Es una fabrica de modelos que llena las tablas con informacion generada aleatoriamente, hecho por php y usa faker
comando para crear un factorie
php artisan make:factory nombre
se almacena en el directorio de bd

# semillas
dentro de la carpeta seeders hay una carpeta root y se manda a llamar el factorie con el metodo factorie con cad seguido de create, con eso se crea la linea factorie
 
