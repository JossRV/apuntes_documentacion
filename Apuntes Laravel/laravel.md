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

sudo apt-get install php-xml
