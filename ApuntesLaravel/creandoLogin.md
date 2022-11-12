### Crear laravel
```
    php artisan make:controller AuthController -> Crear el controlador para hacer los login 
    en registro creas funcion registrar con parametro request para taraer los datos de los inputs 
    php artisan make:middleware nocache -> para la cache y evitar que al regresar no deje despues de salir de la sesion

    NOTA: El archivo RouteServiceProviders es en donde dice donde nos va a redirigir
    Para saber el id de la sesión activa es con el siguiente:{
        -> {{Auth::user()->id}}
    }

    Los paquetes vienen de Facades
    Para validar las sesiones

    Middleaware == enlace antes del llegar al servidor
```

