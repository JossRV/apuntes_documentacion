# Estructura de laravel
- La carpeta **app** tiene toda la información que se agrega controladores y modelos, es basicamente donde se tiene todo el codigo fuente de la aplicacion.
- La carpeta **public** todos los recursos que se pueden compartir con mas personas.
- La carpeta **resource** se tiene las vistas y los recursos de programación o de desarrollo, hay una carpeta llamada **views**, donde se almacenan todas las vistas de la aplicacion web en motor de plantillas blade (dev´s).
- La carpeta **routes** todas las rutas para que funcione, debe pasar por una vista para que funcione, es un puente.
- Los **modelos**, trabajan con una tabla de los mismos nombres y la convierte en un objeto, en pocas palabras, los modelos en laravel, son tablas.
- La carpeta **public** contiene informacion que el usuario puede ver, archivos css, js e imagene, (archivos listos para el navegador).
- La carpeta **routes** contiene todas las rutas del proyecto, se pueden crear nuevos archivos de rutas si es que el proyecto es muy grandeo simplemente para mejor ordenamiento.
- **Interpolación**, forma de traer las variables de php de un controlador. 
- **Asset**, metodo para llamar las carpetas publicas (CSS y JSS).

# Rutas
- **controlador** - es una clase.
- **metodo** - se crean dentro de la clase.

# vistas
- Carpeta views donde se encuentra en resources->views.
- Como se manda a llamar -> por ruta, aunque no es la recomendable por defecto porque no esta enlazada con un controlador.

## Vistas y rutas
- Las rutas son creadas con un tipo de verbo que actuan de puente o estan asociados a una peticion.
- Verbos HTTP:
- **get** - vistas (api)
- **delete** - eliminar recursos de la base de datos
- **put** - actualizar (update)
- **post** - crear
  
- Sintaxis: 
```
    Route::get('/'->nombre ruta,[controller::class->clases,'metodo'->metodo de controlador]);
    //Ejemplo:
    Route::get ('/',[contolador::class, 'metodo']);
```
- Ruta con parametros:
```
    route::get('inicio/{id0}/{id}'->nombre ruta,[controller::class->clases,'metodo'->metodo de controlador]);
```
- Ruta con nombre especifico, facilita llamarlo en la interpolacion:
```
    route::get('inicio/{id0}/{id}'->nombre ruta,[controller::class->clases,'metodo'->metodo de controlador])->name("rutaX");
```
  
> **Performance:** La aplicacion se genera de manera optima.

# Crear proyecto
- Comando para crear el proyecto de laravel
```
    //cualquier otra distro o SO
    composer create-project laravel/laravel=8.* "nombre"
    //manjaro
    composer create-project laravel/laravel myproject "8.*"
    laravel new myproject
```
# layaout->plantillas
- Se ubica en la carpeta resources->views->layouts.
- Se sabe que se llama la plantilla con la extension .blade.
- Estructura del layout:
```
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
```
> Vista
```
    @extends('pathlayout')-> ‘main’
```
- Abro la seccion para que envie mi contenido al yiel creado en la vista main.
```
    @section('contenido')
        <h1>Mi contenido</h1>
        <p>Este es el contenido de mi vista específica.</p>
    @endsection
```

# Creación de la primer vista con el controlador
- ***Es un enlace y control entre vistas y modelos***
- Crear un controlador.
```
    // sin metodos
    php artisan make:controller 'nombre'
    //con metodos necesarios para el crud
    php artisan make:controller 'nombre' -r
```
- Creamos un método de controlador para llamar la vista.
```
    //retornar vista
    public function index(){
        return view("inicio");
    }

    //retornar vista con variables y datos
    public function index(){
        $titulo = "Inicio";
        return view("nameView",compact("titulo"));
    }

    //recupera la informacion de la solicitud de los verbos que haya llegado
    public function store(request $request){
        $request->request('v1'); - se obtiene el valor
        $request->v1;
    }
    //llamas clases para reservar memoria
    $item = new User();
    //rellena el espacio de memoria
    $item = User::all();
```
- Tener mas de una vista en el controlador:  
```
    return view('v').view('vz');
```
- Creamos una ruta para nuestro método de controlador usando el verbo get.
```
    Route::get('/',[Paisajes::class,'index']);
```
- Creamos una vista dentro de la carpeta: 
```
    resorces/views/{nombre vista}.blade.php
```

## Parametros por URL
- Simplemente, en la ruta agregamos entre llaves el parametro que vamos a enviar.
```
Route::get('/edit/{parametros}/{n parametros}',[CategoriasControlles::class,'edit']);
```

# Reglas de escritura de archivos

- **Tablas** - plural
- **Modelos** - singular
- **Controladores** - plural
- **Rules o Reglas** - singular
- **Request** - singular

# Instalar Bootstrap en Laravel
```
    commands ->{
      npm i
      npm i bootstrap 
      npm i @popperjs/core
      npm i sass-loader sass webpack --save-dev
      npm install resolve-url-loader@^5.0.0 --save-dev --legacy-peer-deps
    }
```
- Configurar archivos css y js dentro del archivo webpack.mix.js
```
    {
        mix.js('resources/js/app.js','public/js')
        .sass('resources/css/app.scss','public/css')
        .sourceMaps();
    }
```
- Cambiar el nombre al archivo .css dentro de resources/css/ por .scss
- Para saber que las rutas estan bien se corre el compilador:
```
    npm run watch
```
### Configuracion de recursos CSS y JS

- Dentro del archivo resources/js/app.js agregamos
```
   require('./bootstrap');
   import 'bootstrap';
```
- Dentro del archivo resources/css/app.scss agregamos
```  
    @import '~bootstrap/scss/bootstrap';
```
- Agregar Dependencias en Layouts tanto css como js
```
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <script src="{{mix('js/app.js')}}"></script>
```
>El mix evita la caché del navegador a diferencia de asset

# Instalar fontawesome 6.2
```
    npm install --save @fortawesome/fontawesome-free
```
- En resources/css/app.scss hacemos la importacion
```
    @import '~@fortawesome/fontawesome-free/css/all.min.css';
```
# Instalar Select2
```
    npm i jquery
    npm i select2
```
- En resources/js/app.js agregamos
```
    import $ from 'jquery';
    require('select2');
    $('.select').select2();
```
- Posteriormente en resources/css/app.scss
```
    @import "~select2/dist/css/select2.css";
```
>Para finalizar y ver que funciona creamos un select en la pagina inicio

# [Sweetalert](https://realrashid.github.io/sweet-alert/)

- Bajar el de composer
```
    composer require realrashid/sweet-alert
```
- Agregar el registro del servidor en config/app.php
```
    RealRashid\SweetAlert\SweetAlertServiceProvider::class,
```
- En la seccion de providers, despues del bloque de comentarios Package Service Providers...
- Agregar en config/app.php en la seccion aliases
```
    'Alert' => RealRashid\SweetAlert\Facades\Alert::class,
```
- Ahora en nuestro layout, nuestra plantilla principal, ya sea main o inicio agregaremos el include
```
    @include('sweetalert::alert')
```
- Despues corremos el comando en la terminal para que la paqueteria se integre
```
    php artisan sweetalert:publish
```
> Ya en uso podemos seleccionar las alertas que queramos usar o incluso crearlos


# Archivo .env 
- Archivo de configuracion es por excelencia en muchos framework para la configuracion de variables de entorno de la aplicacion web, datos de conexion de base de datos, asi como los datos del entorno de trabajo, ya sea produccion o desarrollo.
- En el archivo de configuracion .env podemos encontrar la conexcion por defecto a la base de datos, en .env apartir de la linea 11 :
```
    DB_CONNECTION= mysql - sin modificacion
    DB_HOST= 127.0.0.1 - sin modificacion
    DB_PORT= 3306 - sin modificacion
    DB_DATABASE= 'nombre de la base'
    DB_USERNAME= 'usuario'
    DB_PASSWORD= 'contraseña'
```
# Migraciones
- Nos ayudan al control en la bd.
- Crear migracion.
```
    php artisan make:migration crear_tabla_usuarios
```
- Dar de alta la migracion.
```
    php artisan migrate
```
- Actualizar tablas con campos nuevos o correccion de campos.
```
    php artisan migrate:fresh
```

- Objeto para crear los datos.
```
    $table
```
- Metodos para el control de registros...
- Determina que es un campo autoincrementable y de llave primaria.
```
    $table->id();
```
- Campo de tipo cadena.
```
    $table->string();
```
- Campo de tipo date.
```
    $table->date();
    $table->date('Y-m-d');
    $table->date('H-m-s');
```
- create at y update at
```
    $table->timestamps();
```
- Campo tipo entero int.
```
    $table->integer();
```
- Campo de tipo flotante.
```
    $table->float();
```
- Campo para contraseñas
```
    $table->rememberToken();
```

# Que es ORM
> Mapeo Objeto Relacional
- Esto quiere decir que la aplicacion tomara a la base de datos como si fuera un objeto de la misma aplicacion.
- Por ejemplo si tenemos una tabla llamada personas el objeto en el orm sera llamado personas, si la tabla tiene un nombre llamado
apellido_paterno entonces sera una propiedad del orm.
```
    $personas = new Personas();
    $personas -> apellido_paterno = "Aquino";
```
# Modelos
- Los modelos son basicamente clases php que nos permiten interactuar con la base de datos, por convencion en Laravel, los modelos se escriben con el nombre de una tabla de base de datos existente para asi poder crear una relacion directa a la hora de usar el orm, sin embargo si no deseamos utilizar la convencion, laravel cuenta con la configuracion necesaria para que el modelo pueda trabajar con la tabla que nosotros le indiquemos..

- Comando para crear el modelo.
```
    php artisan make: model 'nombre_modelo'
```
- Crea el modelo y la migracion para hacer las tablas al mismo tiempo.
```
    php artisan make:model 'nombre' -m
```
- Dentro del archivo model podemos especificar el nombre de la tabla.
```
    protected $table = 'nombreTabla';
```

# usar tablas propias con laravel 8
- Creacion del controlador y modelo
```
    php artisan make:controller categorias
    php artisan make:model categoria
```
- En nuestro controlador llamar la consulta y mostrarlo a la vista.
```
    public function index(){
        $categorias = categoria:: all();
        return view('welcome,compact('categorias'));
    }
```
- Llenamos el modelo especificando las columnas de la tabla.
```
    class Categoria extends Model{

        use HasFactory;

        protected $table = 't_categoria';
        protected $primaryKey = 'id_categoria';
        protected $fillable = [
            'nombre'
        ];
        protected shidden = [
            'create_at',
            'updated_at'
        ];
    }
```
- MOSTRAR INFORMACION DE UNA TABLA EN UNA VISTA
```
    @foreach($categorias as $item)
        <tr>
            <td>{{$item->id}}</td>
        <tr>
    @endforeach
```
# clonar repositorio de laravel desde git
- Clonando el proyecto 
```
    git clone <link-proyecto>
```
- Instalamos las dependencias y paqueterias con
```
    composer install
    npm i
```
- Creamos el archivo .env con
```
    cp .env.example .env
```
- Generamos el codigo
```
    php artisan key:generate
```
>Finalizando iniciamos el servidor y queda nuestro proyecto de laravel clonado

# Crear un crud en laravel
1. Se debe crear  la base de datos con la tabla la cual debe contener los datos y agregar extra dentro de las columnas de la tabla
```
    {
        -> updated_at date, created_at date
    }
```
2. Se hará la conexion dentro del archivo (.env)
3. Se crean el modelo(singular) y el controlador (plural)
4. Al modelo se le agrega la tabla en la que va a trabajar -> el id lo va a reconocer automaticamente
```
    {
        -> protected $table = '{name table}'; 
    }
```
5. Crear una carpeta llamada "layout" en la que dentro tendra main.blade.php
5. dentro de main crear yields y interpolacion de el title
7. Se crea la tabla incluido el layout main
8. A continuacion se hace el metodo y el route como se ha hecho hasta ahora
9. dentro de la tabla de welcome se hace la tabla que sera la que contendra los datos
10. El primer paso a realizar para hacer el crud sera un boton el cual contrendra la primer funcion del CRUD la cual sera la C -> 'create'
11. se creara una nueva ruta la cual se utilizara para agregar nuevo dato
12. Dentro del ancore '<a></a>' y dentro del href se pondra la ruta anteriormente creada
13. Dentro de esa nueva ruta se creara un formulario en donde la ruta sera de tipo POST y se enviara al metodo store
```
    {
        ->Route::post('/store',[{nameOfController}::class,'store'])->name('{nameOfRoute}.store');
    }
```
14. Dentro del formulario debe ir @csrf el cual es el token
15. A continuacion en el controlador se busca el metodo de store, el cual recibira los metodos POST y los guardara en la base de datos
16. Para mostrar los datos en la ventana principal, se hara lo siguiente:
```
    {
        - Se creara un foreach el cual recorrera todos los datos que existan
        - dentro de los parametros de invocacion se pondran la llave con un alias
        - dentro de los <td> </td> se utilizara interpolación {{}}
        - Ejemplo: 
        @foreach($categorias as $item)
            <tr>
                <td>{{$item->id}}</td>
            <tr>
        @endforeach
    }
```

# Factories
- Es una fabrica de modelos que llena las tablas con informacion generada aleatoriamente, hecho por php y usa faker.
- Comando para crear un factory...
```
    php artisan make:factory nombre
```
- Asignar elementos aleatorios, tanto numeros o texto.
```
    'producto'=>$this->faker->randomElement(['Aceite','Jabon Ace','Jabon Ariel','Sopa','Maruchans','Coca-Cola'])
    'precio'=>$this->faker->randomElement(['22.5','10.4','11','35','30','25','10'])
```
- Asignar datos fecha.
```
    'vendido'=>$this->faker->date()
```
- Asignar numeros aleatorios especificando los digitos especificos y un booleano.
```
    'serial'=>$this->faker->randomNumber(7,true) 
    // el bolleano afirma que solo me de numeros con 7 digitos
    'serial'=>$this->faker->randomNumber(4,false) 
    // el boleano afirma que me de numeros apartir de 4 a 1 digito
```
- Usar una funcion para asignar datos
```
    'imagen'=>function(array $obj){ 
        // como parametro recibo el arreglo mismo del factorie
        // puedo retornar cualquier dato para llenarlo a la base de datos
        return $obj['producto']; 
        // mi variable del parametro especifico el campo a tomar el valor 
    }
```
- Asigna apellido de la persona
```
    'paterno'=>$this->faker->lastName(),
    // asigna nombre de la persona de acuerdo al genero asignado
    'nombre'=>function(array $user){
        return $this->faker->name($user['genero']);
    },
```
- Asignar genero de la persona
```
    'genero'=>$this->faker->randomElement(['male', 'female']),
```

# Semillas
- Dentro de la carpeta **seeders** hay una carpeta **root**
- Despues del **ForModel**, especificar el nombre del modelo asignado en el protected, debe ser igual al nombre de la tabla para que llame correctamente
- El **count**, asignas cuantos registros quieres, o cuantas filas quieres agregar, no hay limite de numero
- Ejemplo...
```
    PersonaFactory::factoryForModel('persona')->count(15)->create();
```
- Comando para ejecutar la semilla.
```
    php artisan db:seed
```
- Comando que eliminara las tablas y creara las seed de la bd
```
    php artisan migrate:fresh --seed
```
 
# Tinker
- Es una herramienta de linea de comandos en laravel.
- Dentro de tu proyecto usas el comando y abrira como un shell.
```
    php artisan tinker
```
### Obtener datos con tinker 
- Una sola muestra.
```
    $item = App\Models\miModelo::all();
```
- Muestra por rango.
```
    $item = App\Models\miModelo::take(1)->get();
```
- Retorna un registro especifico, ya sea id o dato.
```
    $item = App\Models\miModelo::find(2)->get(); -->
```
- Agregar nuevos datos
```
    $item = new App\Models\Estudio
    $item->nombre = 'Joss';
    $item->paterno = 'Velaz';
    $item->FechaNacimiento = '2001-04-16'
    $item->save();
```
- Actualizacion con tinker
```
    $item = App\Models\Person::find('xNum');
    $item->nombre='name actu';
    $item->paterno='paterno actu';
    $item->materno='materno actu';
    $item->save();
```
- Truncar toda la tabla
```
    App\Models\Person::truncate();
```
- Eliminar un registro
```
    $item = App\Models\Person::find(1);
    $item->delete();
```
- Salir del tinker con **q**

### query builder eloquent