### como saber si tenemos composer
```
composer en cmd o terminal
```
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
% campo para contraseñas
$table->rememberToken();

se crean dos metodos up->declara los campos de la tabla y down->revierte la migracion
objeto para crear los datos->table
campos para el control de registros->
```

# factories
Es una fabrica de modelos que llena las tablas con informacion generada aleatoriamente, hecho por php y usa faker
comando para crear un factorie
<!-- se almacena en el directorio de bd -->
php artisan make:factory nombre
<!-- asignar elementos aleatorios, tanto numeros o texto-->
'producto'=>$this->faker->randomElement(['Aceite','Jabon Ace','Jabon Ariel','Sopa','Maruchans','Coca-Cola'])
'precio'=>$this->faker->randomElement(['22.5','10.4','11','35','30','25','10'])
<!-- asignar datos fecha -->
'vendido'=>$this->faker->date(),
<!-- asignar numeros aleatorios especificando los digitos especificos, y un booleano-->
'serial'=>$this->faker->randomNumber(7,true) <!-- el bolleano afirma que solo me de numeros con 7 digitos -->
'serial'=>$this->faker->randomNumber(4,false) <!-- el boleano afirma que me de numeros apartir de 4 a 1 digito -->
<!-- usar una funcion para asignar datos -->
'imagen'=>function(array $obj){ <!-- como parametro recibo el arreglo mismo del factorie -->
    <!-- puedo retornar cualquier dato para llenarlo a la base de datos -->
    return $obj['producto']; <!-- mi variable del parametro especifico el campo a tomar el valor  -->
}
<!-- asigna apellido de la persona -->
'paterno'=>$this->faker->lastName(),
<!-- asigna nombre de la persona de acuerdo al genero asignado -->
'nombre'=>function(array $user){
    return $this->faker->name($user['genero']);
},
<!-- asignar genero de la persona -->
'genero'=>$this->faker->randomElement(['male', 'female']),

# semillas
dentro de la carpeta seeders hay una carpeta root y se manda a llamar el factorie con el metodo factorie con cad seguido de create, con eso se crea la linea factorie
<!-- especificar en la semilla -->
<!-- llamada del factory -->
<!-- despues del ForModel, especificar el nombre del modelo asignado en el protected, debe ser igual al nombre de la tabla para que llame correctamente -->
<!-- el count, asignas cuantos registros quieres, o cuantas filas quieres agregar, no hay limite de numero -->
PersonaFactory::factoryForModel('persona')->count(15)->create();
<!-- comando -->
php artisan db:seed
<!-- comando que eliminara las tablas y creara las seed de la bd -->
php artisan migrate:fresh --seed
 
# tinker
Herramienta de linea de comandos en laravel
<!-- Dentro de tu proyecto usas el comando y abrira como un shell -->
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


% query builder eloquent



