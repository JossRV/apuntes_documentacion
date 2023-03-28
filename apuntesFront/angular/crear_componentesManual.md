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
```
## Directiva *ngFor
```
Para probarlo vamos a crear un arreglo
    TYPESCRIPT
    public heroes:string[] = ['1','2','3'];
    
    HTML
    <ul>
        <li></li>
    </ul>
    <ul>
        <li *ngFor="let heroe of heroe"></li>
    </ul>
    <ul>
        <li *ngFor="let heroe of heroes">{{heroe}}</li>
    </ul>
    <ul>
        <li *ngFor="let item of items; as myItem">{{myItem}}</li>
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

## Directiva *ngFor en divs

```
usando el mismo archivo ts anterior
HTML
<ng-container *ngFor="let usuario of usuarios">
    <div>Nombre: {{usuario.nombre}}</div>
    <div>id: {{usuario.id}}</div>
</ng-container>
```

## Directiva *ngIf
````
El uso de *ngIf se usa para mostrar u ocultar elementos en la vista
sintaxis
if
<div *ngIf="condicion">
    <p>contenido</p>
</div>

if-else
<div *ngIf="condicion ; else mensaje">
    <p>contenido</p>
</div>

<ng-template #mensaje>
    <p>La condicion es falsa</p>
</ng-template>
```