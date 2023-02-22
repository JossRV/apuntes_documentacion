### como saber si tenemos composer
```
composer en cmd o terminal
```
4 instalacion de laravel
por defecto se instalara la version mas reciente

composer create-progect laravel/laravel=8.\*"nombre"

vistas
carpeta donde se encuentra
como se manda a llamar-> por ruta, aunque no es la recomendable la de defecto porque no esta en enlace con un controlador

route::get('/'->nombre ruta,[controller::class->clases,'metodo'->metodo de controlador]);

layaout->plantillas
se sabe que se llama la plantilla por el blade

<html>
<head>
    <title>Mi aplicación web</title>
</head>
<body>
    <header>...</header>
    <nav>...</nav>
    <main>
        @yield('contenido')
    </main>
    <footer>...</footer>
</body>
</html>

@extends('pathlayout')-> ‘main’

@section('contenido')
<h1>Mi contenido</h1>
<p>Este es el contenido de mi vista específica.</p>
@endsection

rutas

puentes o asociados a una peticion
funcionan con verbos http
PERFOMANCE->la aplicacion se genera de manera optima
route::get('inicio/{id0}/{id}'->nombre ruta,[controller::class->clases,'metodo'->metodo de controlador]);

controladores
es un enlace entre vistas y modelos
creacion de controladores->php artisan make:controller 'nombre'

> php artisan make:controller 'nombre' -r (agrega los metodos para realizar el crud)

public function store(request $request){
$request->request('v1')->se obtiene el valor
$request->v1;

}->recupera la informacion de las soliciton de los verbos que haya llegado

$item = new User();->llamas clases para reservar memoria
$item User::all();->rellena el espacio de memoria

modelos
clases que representan la tabla de base de datos
php artisan make:model 'nombre'
php artisan make:model 'nombre' -m ->para migrar directamente
comando para migracion
php artisan make:migration crear_tabla_usuarios

migracion->clase php que por medio del codigo crea tablas

### migracion

```
nos ayudan al control en la bd 
php artisan make:migration create_nombre_table
para dar de alta es
php artisan migrate
se crean dos metodos up->declara los campos de la tabla y down->revierte la migracion
objeto para crear los datos->table
campos para el control de registros->
```

factories
usa faker
comando para crear un factorie
php artisan make:factory nombre
se almacena en el directorio de bd
dentro de la carpeta seeders hay una carpeta root y se manda a llamar el factorie con el metodo factorie con cad seguido de create, con eso se crea la linea factorie
