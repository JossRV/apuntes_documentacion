# <p align="center">Convenciones de nombres</p>
- Por defecto App en TS es {app.component.ts} 
- otro ejemplo: **altasBajas.component.ts**
- Tambien podemos ver que el selector se llama **app-root**
- Y por ultimo en el **app.module.ts** que es el modulo principal del proyecto y tambien como nombre de clase es: **AppComponent**
- Ejemplo:

componente para calificaciones:
> //componentes .ts .html .css
> 
> calificaciones.component.ts
> 
> //selector
> 
> calificaciones-root
> 
> //clase iniciando con mayusculas
> 
> CalificacionesComponent
> 
> Si van a ser nombres compuestos es con guión medio '-'
# <p align="center">Elementos necesarios para crear un componente</p>
- Archivos **ts**, **html** y **css**
- En el archivo TS necesitamos:
    - clase con export
    ```
        export class AppComponent{}
    ```
    - importacion y decorador component 
    ```
        import { Component } from '@angular/core';
        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ```
# <p align="center">Creacion de componentes mediante consola</p>
- Abrimos CLI
```
    // Al agregar el nombre del componente, se crea la carpeta misma junto los demas componentes.
    ng generate component carpeta/nombreComponente
    // Abreviaciones de comando
    ng g c carpeta/nombreComponente
    // Generar solo carpeta de componentes
    ng g c nombreComponente
```
- Podemos olvidar poner component al final ya que el cli lo infeiere de manera automatica.
- Tambien veremos que mapea el modulo y agrega nuestro componente de manera automatica.
# <p align="center">Directiva *ngFor</p>
Para probarlo vamos a crear un arreglo.
- TYPESCRIPT
```
    public heroes:string[] = ['1','2','3'];
```
    
- HTML
```
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

# <p align="center">*ngFor en tablas</p>
- En el archivo ts
```
    public usuarios: any = [
        {id:1, nombre:"usuario1"},
        {id:2, nombre:"usuario2"},
        {id:3, nombre:"usuario3"},
    ];
```

- Archivo html
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

# <p align="center">Directiva *ngFor en divs</p>
Usando el mismo archivo ts anterior.
- HTML
```
    <ng-container *ngFor="let usuario of usuarios">
        <div>Nombre: {{usuario.nombre}}</div>
        <div>id: {{usuario.id}}</div>
    </ng-container>
```

# <p align="center">Directiva *ngIf</p>
El uso de *ngIf se usa para mostrar u ocultar elementos en la vista
- Sintaxis
```
    //if
    <div *ngIf="condicion">
        <p>contenido</p>
    </div>

    //if-else
    <div *ngIf="condicion ; else mensaje">
        <p>contenido</p>
    </div>

    <ng-template #mensaje>
        <p>La condicion es falsa</p>
    </ng-template>
```
***[Regresar](/README.md)***