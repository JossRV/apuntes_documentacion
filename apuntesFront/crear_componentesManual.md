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

## Crear componente de forma automatica
abrimos el CLI y escribimos

```ng generate component carpeta/nombreComponente```

```ng g c carpeta/nombreComponente```

## *ngFor
en el archivo ts

```public heroes:string[] = ['spidey','superman','batman',''];```

En el archivo html
```
<ul>
    <li *ngFor="let heroe of heroes"> {{heroe}} </li>
</ul>
```

## *ngFor en tablas
En el archivo ts
```
public usuarios: any = [
    {id:1, nombre:"Joss"},
    {id:2, nombre:"mitzi"},
    {id:3, nombre:"faty"},
];
```

Archivo html
```
<table>
    <thead>
        <tr>
            <th>id</th>
            <th>nombre</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let usuario of usuarios">
            <td>{{usuario.id}}</td>
            <td>{{usuario.nombre}}</td>
        </tr>
    </tbody>
</table>
```