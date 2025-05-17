## Livewire
- ### Instalación
~~~
composer require livewire/livewire
~~~

- Livewire proporciona un comando artesanal conveniente para generar nuevos componentes rapidamente
~~~
// comando para hacer nuevo componente llamado counter
php artisan make:livewire counter
~~~
- Dicho comando creara el componente en el archivo `app/livewire/archivo.php` y la vista `resources/view/livewire/archivo.blade.php`
- Dentro del componente php, se agregaran los metodos y propiedades necesarios para su funcionamiento
- Declaramos una propiedad publica
- Declaramos un metodo, dichos metodos se pueden activar en el navegador de varias maneras, incluso con un boton
- Declaramos un renderizador, es el metodo que devuelve la vista blade, dicha que sera una plantilla html
- En la vista utilizamos la propiedad como una variable de php con una interpolacion, luego se utiliza los metodos con `wire:click="nombreMetodoCreado"`

> ### Los componentes de Livewire DEBEN tener un solo elemento raíz 
> 
> Para que Livewire funcione, los componentes deben tener solo uno elemento único como su raíz. Si se detectan múltiples elementos raíz, se lanza una excepción. Se recomienda usar un `<div>` elemento. Los comentarios HTML cuentan como elementos separados y deben colocarse dentro del elemento raíz. Cuando renderizado componentes de página completa, las ranuras con nombre para el archivo de diseño se pueden colocar fuera del elemento raíz. Estos se eliminan antes de que se represente el componente.

- Registrar una ruta para el componente, se hace la importacion del arcivo dentro de la carpeta livewire
- Crear diseño de plantilla, comando: `php artisan livewire:layout`
- Se creara el archivo `resources/views/components/layouts/app.blade.php`
- Con el siguiente contenido  

~~~
    <!DOCTYPE html>
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
            <title>{{ $title ?? 'Page Title' }}</title>
        </head>
        <body>
            {{ $slot }}
        </body>
    </html>
~~~

- El componente creado se representara en lugar del `$slot`
- Livewire inyecta automaticamente cualquier activo de front que necesite.