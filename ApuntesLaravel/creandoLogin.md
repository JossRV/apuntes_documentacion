# Crear laravel
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

    Middleaware == enlace antes del llegar al servidor;
    Es una capa intermedia que se ejecuta entre la solicitud HTTP y la ruta o controlador que maneja esa solicitud. 
    Los middlewares permiten realizar acciones como autenticación, autorización, validación, manejo de errores, entre
    otras, antes de que la solicitud llegue al controlador.

```
## ¿Qué es Middleware?
```
    Laravel proporciona varios middlewares integrados, como el middleware de autenticación, que verifica si un usuario ha iniciado sesión 
    antes de permitir el acceso a una ruta o controlador. Tambien hay middlewares paea la protección contra CSRF, para la validación de datos 
    y para redirección HTTP.
    Ademas, Laravel permite crear middleware perzonalizados para manejar acciones especificas para una aplicación en particular. 
    Estos middleware personalizados se pueden agrear a una ruta especifica o se pueden aplicar globalmente a todas las solicitudes entrantes.

    ->Los middlewares en Laravel son muy poderosos y flexibles, y permiten a los desarrolladores construir aplicaciones web seguras y robustas con facilidad
```

## Ejemplo de middleware
```
    Este middleware se encarga de verificar si el usuario ha iniciado sesión antes de permitir el acceso a una ruta si el usuario 
    no ha iniciado sesión se redirige a la página de inicio de sesión
```
## Modo de uso
```
    public function_contructor(){
        $this->middleware(['guest'])->only(['index']);
        $this->middleware(['auth', 'Valido'])->only(['mostrar']);
    }   
```

***[Regresar](/README.md)***