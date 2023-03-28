## Convenciones de nombres
```
    ->Por ejemplo viene por defecto App vemos que en TS es {app.component.ts} otro ejemplo: altasBajas.component.ts
    ->Tambien podemos ver que el selector se llama app-root
    ->Y por ultimo en el app.module.ts que es el modulo principal del proyecto y tambien como nombre de clase es: AppComponent

    Ejemplo:
    componente para calificaciones:
    -->calificaciones.component.ts
    -->calificaciones-root
    -->CalificacionesComponent :: siempre que se declara una clase siempre ava a ser con mayuscula
    Si van a ser nombres compuestos es con guión medio '-'
```
## Elementos necesarios para crear un componente
```
    ->Archivos ts, html y css
    ->En el archivo TS necesitamos:
        -> clase con export
        -> decorador component
        -> dentro del decorador component necesitamos{
            ->selector
            ->templeteURL
            ->styleUrls
        }
```
## Creacion de componentes mediante consola
```
    Abrimos CLI
        ng generate component carpeta/nombreComponente
        ng g c carpeta/nombreComponenete
    podemos olvidar poner component al final ya que el cli lo infeiere de manera automatica.Tambien veremos que mapea el modulo y agrega nuestro componente de manera         automatica.

